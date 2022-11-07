import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "../../auth";
export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials){
                const client = await connectToDatabase();

                const usersCollection = client.db().collections('users');
                const user = await usersCollection.findOne({email: credentials.email});

                if(!user) {
                    throw new Error('No user found')
                }
                await verifyPassword(credentials.password, user.password);

                client.close();
            }
        })
    ]
});