import { Databases } from "appwrite";
import client from "./client";

// @ts-ignore
const db: Databases = new Databases(client);

export default db;
