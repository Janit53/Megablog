import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import AllPosts from "./AllPosts";

function Home() {
    const [posts, setPosts] = useState()

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.rows)
            }
        })

    }, [])


    if (posts && posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="text-2xl font-bold">
                        Posts are empty or Login to read posts
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8">
            <Container>

                <div className='flex flex-wrap'>
                    {posts &&
                        posts.map((post) => {
                            return (
                                <div key={post.$id} className='p-2 w-1/4 '>
                                    <PostCard {...post} />
                                </div>
                            )
                        })
                    }
                </div>

            </Container>
        </div>
    )


}

export default Home