import BaseUrl from "@/app/BaseUrl";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: 'Username', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        passwordConfirm: { label: 'password-Confirm', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          if (credentials.NewUser === true) {
            const res = await BaseUrl.post('api/v1/users/signup', {
              name:credentials.username,
              email:credentials.email,
              role:"user",
              password:credentials,
              passwordConfirm:credentials.passwordConfirm
            });
            const user = res.data;
            return Promise.resolve(user);
          }else{
            const res = await BaseUrl.post('api/v1/users/login', {
              email: credentials.email,
              password: credentials.password,
            });
            const user = res.data;
            return Promise.resolve(user);
          }
        } catch (error) {
          if (error?.response?.data?.message) {
            return Promise.reject(new Error(error?.response?.data?.message));
          } else if (error?.response?.data) {
            return Promise.reject(new Error(error?.response?.data));
          } else if (error?.cause?.code === 'ECONNREFUSED') {
            return Promise.reject(new Error('Login failed. Please try again later'));
          }
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/',
  },
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        token.user = user;
      }
      
      return token;
    },
    async session({session,token,user}) {
      delete session.token;
      delete session.user;
      session.user = token.user;
      return session
    },
  },
};
export const handler = NextAuth(AuthOption)

export { handler as GET, handler as POST }
 
