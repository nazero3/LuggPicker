import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
      // OAuth authentication providers
      
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      //Sign in with passwordless email link
      EmailProvider({
        server: process.env.MAIL_SERVER,
        from: "<no-reply@example.com>",
      }),
    ],
    secret: process.env.JWT_SECRET
  })