import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

const SignInButton = () => {
  return (
    <form>
      <Button
        formAction={async () => {
          "use server";
          await signIn();
        }}
      >
        SignInButton
      </Button>
    </form>
  );
};

export default SignInButton;
