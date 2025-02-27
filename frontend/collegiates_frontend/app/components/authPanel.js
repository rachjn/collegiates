function AuthPanel(props) {
  return (
    <>
      <div className="flex h-[70vh] items-center justify-center">
        <div className="bg-off-white grow max-w-[30rem] h-full rounded-xl shadow-lg">
          <div
            id="items-inside-box"
            className="flex flex-col items-center gap-4"
          >
            <div className="text-center mt-6 font-bold text-lg">
              {props.title}
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export { AuthPanel };
