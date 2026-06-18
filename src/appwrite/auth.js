/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create({ userId: ID.unique(), email: email, password: password, name: name })

            if (userAccount) {
                // call another method redirect to LOGIN
                return this.login({ email, password });

            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({
                email: email,
                password: password
            })
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (e) {
            console.log("Appwrite service: getCurrentUser", e);
            return null;
        }

        // eslint-disable-next-line no-unreachable
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}



// exporting the object of the class AuthService
const authService = new AuthService();
export default authService;