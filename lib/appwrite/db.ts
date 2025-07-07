import { Databases } from "appwrite";
import client from "./client";

const db: Databases = new Databases(client);

export default db;
