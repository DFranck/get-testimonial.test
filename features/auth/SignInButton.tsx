"use client";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signInAction } from "./auth.action";

const SignInButton = () => {
  return (
    <Button
      variant={"secondary"}
      size={"sm"}
      onClick={() => {
        signInAction();
      }}
      className="flex gap-2"
    >
      <LogIn size={16} />
      SignIn
    </Button>
  );
};

export default SignInButton;
