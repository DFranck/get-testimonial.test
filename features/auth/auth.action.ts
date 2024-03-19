"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import { User } from "@prisma/client";
export const signOutAction = async () => {
  await signOut();
};

export const signInAction = async () => {
  await signIn();
};

export const isCurrentUser = async () => {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  const user = session.user as User;
  return user;
};

export const currentUser = async () => {
  const user = await isCurrentUser();
  if (!user) {
    throw new Error("Not logged in");
  }
  return user;
};
