import Link from "next/link";

function Button({ children }) {
  return (
    <>
      <div className="flex ">
        <Link
          href={`/${children.toLowerCase().replace(/\s/g, "")}`}
          className="bg-primary rounded-full py-1 px-5 font-bold text-off-white"
        >
          {children}
        </Link>
      </div>
    </>
  );
}

export { Button };
