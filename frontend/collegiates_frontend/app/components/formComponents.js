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
  return (
    <>
      <label className="min-w-[10rem] flex flex-col gap-2">
        <span className="capitalize font-bold text-sm">{label}</span>
        <div className="relative flex flex-col gap-2 transition-outline ease-in-out duration-200 border border-gray-300 focus-within:outline-2 focus-within:outline-primary rounded-md py-[10px] px-2">
          <select {...props}>
            <option value=""></option>
            {options.map((option, index) => (
              <option value={option} key={index}>
                {option}
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
