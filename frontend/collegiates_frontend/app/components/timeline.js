import { Heading } from "./heading";

function Timeline() {
  const collegiatesNum = 26;
  const hostSchool = "University of Maryland, College Park";
  const regOpens = "Feburary 8, 2025";
  const earlyRegDeadline = "March 8, 2025";
  const compDocsDeadline = "March 8, 2025";
  const regFeeDeadline = "8 AM on Competition Day";

  return (
    <>
      <div className="flex flex-wrap">
        <div
          id="left-side"
          className="lg:ml-[10vw] flex flex-col max-w-[30rem] gap-4"
        >
          <Heading className="!text-7xl text-left">
            {collegiatesNum}th Annual Collegiate Wushu Tournament
          </Heading>
          <h2 className="text-4xl tracking-tighter opacity-80">
            Hosted by {hostSchool}
          </h2>
        </div>

        <div id="right-side">
          <TimelineEvent />
        </div>
      </div>
    </>
  );
}

function TimelineEvent() {
  return (
    <>
      <div className="bg-gray-400 py-4 pr-10 pl-12 rounded-lg text-xl">
        <h3>Event Event event Name</h3>
        <h3>Event Event event Date</h3>
      </div>
    </>
  );
}

export { Timeline };
