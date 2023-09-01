import {withAuth} from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/",
    }
})

export const config = {
    matcher: [
        "/users/:path*",
        "/conversations/:path",
        "/workouts/:path",
        "/calender/:path",
        "/calender/userCalender/:path",
        "/dashboard/:path",

    ]
}