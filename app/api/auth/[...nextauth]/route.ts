import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
                // enter your authorization logic
                // Check from db something like that
                return {
                    id: "1",
                    name: "Anil",
                    email: credentials.username
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.NEXT_GITHUB_ID || "",
            clientSecret: process.env.NEXT_GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: ({ session, token, user }: any) => {
            if (session.user) {
                session.user.id = token.uid;
            }
            return session;
        }
    }
})

export { handler as GET, handler as POST }