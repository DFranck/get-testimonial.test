import Image from "next/image";
import LoggedInButton from "../auth/LoggedInButton";
import { ModeToggle } from "../theme/ModeToggle";

const Header = async () => {
  return (
    <header className="flex items-center gap-4 w-full border-b border-border py-1 px-4">
      <h1 className="font-bold text-lg flex-1">
        <Image src={"/icon.png"} alt="Logo" width={32} height={32} />
      </h1>
      <ModeToggle />
      <LoggedInButton />
    </header>
  );
};

export default Header;
