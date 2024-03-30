import { connectMongoDB } from "@/lib/mongodb";
import User from "@/app/(models)/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ session, token, user, trigger }) {
      if (trigger === "update" && session?.stocks) {
        token.stocks = session.stocks;

        const updatedUser = await User.findOneAndUpdate(
          { _id: token.id },
          { watched_stocks: token.stocks },
          { new: true }
        );

        if (updatedUser) {
          console.log("not fail fish");
        } else {
          console.log("fail fish");
        }
      }

      if (trigger === "update" && session?.curr_inv) {
        token.curr_inv = session.curr_inv;

        const updatedUser = await User.findOneAndUpdate(
          { _id: token.id },
          { curr_investments: token.curr_inv },
          { new: true }
        );

        if (updatedUser) {
          console.log("not fail fish");
        } else {
          console.log("fail fish");
        }
      }

      if (user) {
        return {
          ...token,
          id: user.id,
          stocks: user.watched_stocks,
          curr_inv: user.curr_investments,
          balance: user.balance.total,
        };
      }

      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          stocks: token.stocks,
          curr_inv: token.curr_inv,
          balance: token.balance,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
