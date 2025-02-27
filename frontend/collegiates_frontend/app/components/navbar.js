import Link from "next/link";

const tabs = ["News", "Multimedia", "Tournament", "Rules", "About", "Sign In"];

function NavBar() {
  return (
    <div className="flex gap-10 justify-center items-center p-4">
      {tabs.map((tab) => (
        <Link href={`/${tab.toLowerCase().replace(/\s/g, "")}`} key={tab}>
          {tab}
        </Link>
      ))}
    </div>
  );
}

export { NavBar };
