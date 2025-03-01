import Link from "next/link";
import { Button } from "./button";

const tabs = ["News", "Multimedia", "Tournament", "Rules", "About"];

function NavBar() {
  return (
    <div className="flex p-4 font-bold bg-off-white rounded-lg px-12">
      <div className="justify-between flex w-full">
        <div className="flex gap-10 items-center">
          <Link href="/">Home</Link>
          {tabs.map((tab) => (
            <Link href={`/${tab.toLowerCase().replace(/\s/g, "")}`} key={tab}>
              {tab}
            </Link>
          ))}
        </div>
        <Button isLink={true}>Sign In</Button>
      </div>
    </div>
  );
}

export { NavBar };
