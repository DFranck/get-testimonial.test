import { User } from "next-auth";
import { auth } from "./auth";

export const currentUser = async () => {
  const session = await auth();

  if (!session?.user) {
    return null;
  }
  const user = session.user as User;
  return user;
};

export const requireCurrentUser = async () => {
  const user = await currentUser();
  if (!user) {
    // throw new Error("User not logged in");
  }
  return user;
};
