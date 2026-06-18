import React, { useState, useEffect } from 'react'
import appwriteService from "../appwrite/config"
import { PostCard, Container } from '../components/index'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.rows)
            }
        })
    }, [])



    return (
        <div className='w-full py-8'>
            <Container>

                <div className='flex flex-wrap'>
                    {posts ?
                        posts.map((post) => {
                            return (
                                <div key={post.$id} className='p-2 w-1/4 '>
                                    <PostCard post={post} />
                                </div>
                            )
                        }) : <h2 className='text-red-700'>No Posts Available</h2>
                    }
                </div>

            </Container>
        </div>
    )
}

export default AllPosts