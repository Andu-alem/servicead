export { default } from 'next-auth/middleware'

export const config = {
    matcher : ["/register", "/myservice"]
}
///((?!api|_next/static|_next/image|.*\\.png$).*)