"use server"


import { CreateUseronSuperbaseParams } from '@/types';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


// server action for saving the user data to superbase using prisma and postgress

export const createUseronSuperbase = async({avatar , email , username , clerkId}:CreateUseronSuperbaseParams)=>{
    try {
        const res = await prisma.user.create({
            data:{
              username:username,
              avatar:avatar,
              email:email,  
              clerkId:clerkId
            },
        });
        console.log("the data is created:" , res);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);   
    }
}




// server action for getting the user data using clerkid

export const getUserUsingClerkid = async (id:string)=>{
    try {
        const userResponse = await prisma.user.findFirst({
            where:{
                clerkId:id
            },
            include:{
                memberOfProducts:true,
                ownedProducts:true,   
            }
        });
        if(!userResponse){
            return JSON.parse(JSON.stringify({message:"No User Exist"}));
        }
        console.log("User Found: " , userResponse);
        return JSON.parse(JSON.stringify(userResponse));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}


// server action for getting the list of all users

export const getAllUsers = async()=>{
    try {
        const allusersResponse = await prisma.user.findMany({});
        if(!allusersResponse){
            return JSON.parse(JSON.stringify({messae:"No Users Found"}));
        }
        console.log("Users List: " , allusersResponse);
        return JSON.parse(JSON.stringify(allusersResponse));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}