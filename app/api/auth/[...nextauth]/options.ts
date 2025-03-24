import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options : NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:"adi",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials){
                const {email,password}=credentials as {
                    email:string,
                    password:string
                };
                if (email === "user@test.com" && password === "password") {
                    return { id: "1", name: "User", email };
                  }
                  return null;
              }
        })
    ],
};
