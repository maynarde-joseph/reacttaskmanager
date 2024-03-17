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
      console.log("jwt", { session, token, user, trigger });

      if (trigger === "update" && session?.stocks) {
        token.stocks = session.stocks;

        // MOVED UPDATE FUNCTIONALITY HERE
        // IF CODE BREAKS PLEASE MOVE IT OUT
        const updatedTicketData = {
          watched_stocks: token.stocks,
          // curr_investments: token.curr_inv,
        };

        const updatedUser = await fetch(
          `${process.env.NEXTAUTH_URL}/api/stocks/${token.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData: updatedTicketData }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Ticket updated successfully:", data);
          })
          .catch((error) => {
            console.error("Error updating ticket:", error);
          });
      }

      if (trigger === "update" && session?.curr_inv) {
        token.curr_inv = session.curr_inv;

        const updatedTicketData = {
          curr_investments: token.curr_inv,
        };

        const updatedUser = await fetch(
          `${process.env.NEXTAUTH_URL}/api/stocks/${token.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData: updatedTicketData }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Ticket updated successfully:", data);
          })
          .catch((error) => {
            console.error("Error updating ticket:", error);
          });
      }

      // we can add more later
      if (user) {
        return {
          ...token,
          id: user.id,
          stocks: user.watched_stocks,
          curr_inv: user.curr_investments,
        };
      }

      return token;
    },
    async session({ session, token, user }) {
      console.log("session", { session, token, user });
      // we can add more later
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          stocks: token.stocks,
          curr_inv: token.curr_inv,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
