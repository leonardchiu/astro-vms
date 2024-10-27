declare module "auth-astro/client" {
  export function signOut(): Promise<void>;
  // Add other functions you're using from auth-astro here
}

declare module "@auth/mongodb-adapter" {
  import { Adapter } from "next-auth/adapters";
  export function MongoDBAdapter(client: Promise<MongoClient>): Adapter;
}
