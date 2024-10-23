import NextAuth from 'next-auth'
import credentials from 'next-auth/providers/credentials'
import connect from '../../../../lib/db-connector'
import User from '../../../../models/User'


const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        credentials({
            name: 'Credentials',
            id: "credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                await connect()
                const user = await User.findOne({ email: credentials.email })
                //if (!user) throw new Error("Wrong Email")
               if (!user || !(await user.comparePassword(credentials.password))) {
                    throw new Error("Invalid credentials")
                }
                return { id: user._id, email: user.email, hasService: user.hasService }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (user) {
                token.hasService = user.hasService
            }
            if (trigger == 'update') {
                token.hasService = session.hasService
            }

            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    hasService: token.hasService
                }
            }
        }
    },
    pages: {
        signIn: '/auth/login',
    },
})

export { handler as GET, handler as POST }

