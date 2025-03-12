import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });
console.log("Path: ",`.env.${process.env.NODE_ENV || "development"}.local` )
export const {
  PORT,
  NODE_ENV,
  MONGO_URL,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_ENV,
  ARCJET_KEY,
  QSTASH_URL,
  QSTASH_TOKEN,
  SERVER_URL,
  EMAIL_PASSWORD
} = process.env;
