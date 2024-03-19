import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { LogIn } from "lucide-react";

const SignInButton = () => {
  return (
    <form>
      <Button
        variant={"secondary"}
        size={"sm"}
        formAction={async () => {
          "use server";
          await signIn();
        }}
        className="flex gap-2"
      >
        <LogIn size={16} />
        SignIn
      </Button>
    </form>
  );
};

export default SignInButton;
