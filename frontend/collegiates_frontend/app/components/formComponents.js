import { useState } from "react";

/**
 * @param {object} param0
 * @param {string} param0.type
 * @param {ChangeEventHandler<HTMLInputElement>} param0.onChange
 * @returns
 */
function ShortAnswer({ label, ...props }) {
  return (
    <>
      <label className="flex flex-col gap-2">
        <span className="capitalize font-bold text-sm">{label}</span>
        <div className="transition-outline ease-in-out duration-200 border border-gray-300 focus-within:outline-2 focus-within:outline-primary rounded-md py-[.5px] px-2">
          <input {...props} className="py-2 w-full" />
        </div>
      </label>
    </>
  );
}

function Dropdown({ label, options, ...props }) {
  // function getList(options) {
  //   const comps = [];
  //   options.forEach((value, key) => comps.push([key, value]));
  //   return comps;
  // }
  // const optionsList = getList(options);
  const optionsList = Object.entries(options);

  return (
    <>
      <label className="min-w-[11rem] flex flex-col gap-2">
        <span className="capitalize font-bold text-sm">{label}</span>
        <div className="relative flex flex-col gap-2 transition-outline ease-in-out duration-200 border border-gray-300 focus-within:outline-2 focus-within:outline-primary rounded-md py-[10px] px-2">
          <select {...props}>
            <option value=""></option>
            {optionsList.map((optionPair, index) => (
              <option value={optionPair[1]} key={index}>
                {optionPair[0]}
              </option>
            ))}
          </select>
        </div>
      </label>
    </>
  );
}

const obj = { a: 1, b: 2, c: 2 };

function DatePicker({ label, ...props }) {
  return (
    <>
      <label className="flex flex-col gap-2">
        <span className="capitalize font-bold text-sm">{label}</span>
        <div className="transition-outline ease-in-out duration-200 border border-gray-300 focus-within:outline-2 focus-within:outline-primary rounded-md py-2 px-2">
          <input type="date" {...props} />
        </div>
      </label>
    </>
  );
}

export { ShortAnswer, Dropdown, DatePicker };
