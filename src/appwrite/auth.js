import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

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
      const userData = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userData) {
        this.login({ email, password });
      } else {
        return userData;
      }
    } catch (error) {
      console.log("Appwrite :: createAccount :: ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite :: login :: ", error);
      return false
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite :: getCurrentUser :: ", error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite :: logout :: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
