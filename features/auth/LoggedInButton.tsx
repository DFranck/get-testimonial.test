import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import LoggedInDropdown from "./LoggedInDropdown";
import SignInButton from "./SignInButton";

const LoggedInButton = async () => {
  const session = await auth();
  console.log(session);

  if (!session?.user) {
    return <SignInButton />;
  }
  return (
    <LoggedInDropdown>
      <Button variant={"outline"} size={"sm"}>
        <Avatar>
          <AvatarFallback>{session?.user?.name}</AvatarFallback>
          {session?.user?.image && (
            <AvatarImage
              className="size-6"
              src={session?.user?.image}
              alt={`${session?.user?.image ?? "-"}'s profile picture`}
            />
          )}
        </Avatar>
      </Button>
    </LoggedInDropdown>
  );
};

export default LoggedInButton;
