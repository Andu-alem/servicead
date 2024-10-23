export { default } from 'next-auth/middleware'

export const config = {
    matcher : ["/register"]
}
///((?!api|_next/static|_next/image|.*\\.png$).*)