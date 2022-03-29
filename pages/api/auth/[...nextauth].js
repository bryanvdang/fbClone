import NextAuth from "next-auth";
import { SessionProvider } from "next-auth/react";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SessionProvider.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
