import { Databases } from "node-appwrite";
import client from "./client";

const db: Databases = new Databases(client);

export default db;
