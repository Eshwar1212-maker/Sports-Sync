import bcrypt from "bcrypt"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/app/libs/prismadb"
import { AuthOptions } from "next-auth"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
){
    try{
        const body = await request.json()
        const {email, name, password} = body
        if(!email || !name || !password){
            return new NextResponse('Missing info', {status: 400})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await prisma.user.create({
            data: {
                email, 
                name,
                hashedPassword
            }
        })
        return NextResponse.json(user);
    }
    catch(error){
        console.log(error);
        return new NextResponse("Internal Error", {status: 500})
    }
}


