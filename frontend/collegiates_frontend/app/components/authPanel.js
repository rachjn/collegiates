import Link from "next/link";

function AuthPanel(props, onSubmit) {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative grow bg-off-white max-w-[30rem] h-full rounded-xl shadow-lg">
          <div
            id="items-inside-box"
            className="flex flex-col items-center gap-4 "
          >
            <div className="mt-6 font-bold text-2xl">{props.title}</div>
            <form
              className="self-stretch px-12 flex flex-col gap-6"
              onSubmit={onSubmit}
            >
              {props.children}
            </form>
            <div className="absolute bottom-4 left-4 inset-x-4 py-4 flex items-center justify-center bg-gray-100 rounded-md">
              <div>
                {props.bottomLabel}
                <span className="font-bold text-primary">
                  <Link
                    href={`/${props.bottomLink
                      .toLowerCase()
                      .replace(/\s/g, "")}`}
                  >
                    {props.bottomLink}
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { AuthPanel };
