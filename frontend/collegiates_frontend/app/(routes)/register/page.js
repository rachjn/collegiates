"use client";

import { AuthPanel } from "@/app/components/authPanel";
import { Button, LongButton } from "@/app/components/button";
import {
  DatePicker,
  Dropdown,
  ShortAnswer,
} from "@/app/components/formComponents";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Register() {
  const experiences = { Beginner: "B", Intermediate: "I", Advanced: "A" };
  const classTypes = {
    // CAN BE INFERRED BASED ON STUDENT TYPE CHOSEN.
    "Full/Part-time Undergraduate": "1",
    "Full-time Graduate/Professional School": "1",
    "Fall/Winter Graduates of Current Academic Year": "1",
    "Non-enrolled student": "2",
    "1yr Alumni": "2",
  };

  const studentTypes = {
    "Full/Part-time Undergraduate": "1",
    "Full-time Graduate/Professional School": "2",
    "Non-enrolled student": "3",
    "Fall/Winter Graduates of Current Academic Year": "4",
    "1yr Alumni": "5",
  };

  const [colleges, setColleges] = useState({});
  const sexes = { Male: "M", Female: "F" };
  const [formData, setFormData] = useState({});
  const [nextPage, setNextPage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("http://localhost:8000/collegiates_app/college_data/", {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) =>
        setColleges(
          Object.fromEntries(
            json.map(({ college_name }) => [college_name, college_name])
          )
        )
      );
  }, []);

  const handleSubmit = (e) => {
    const jsonForm = JSON.stringify(formData);
    console.log(jsonForm);
    e.preventDefault();
  };

  const handlePageChange = (e) => {
    setNextPage(!nextPage);
  };

  // function onDateChange(timestamp) {
  //   console.log(timestamp);
  // }

  return (
    <>
      {/* <div
        id="bg-component"
        className="bg-secondary h-screen w-full skew-y-6 absolute -top-[50svh] left-0 -z-20"
      ></div> */}
      {!nextPage ? (
        <AuthPanel
          bottomLabel="Already registered? "
          bottomLink="Sign In"
          onSubmit={handleSubmit}
          title="Register"
        >
          <ShortAnswer
            type="email"
            name="email"
            label="Email"
            onChange={handleChange}
            value={formData.email || ""}
          />
          <ShortAnswer
            type="text"
            name="username"
            label="Username"
            maxLength={20}
            onChange={handleChange}
            value={formData.username || ""}
          />
          <ShortAnswer
            type="password"
            name="pword"
            label="Password"
            minLength={8}
            onChange={handleChange}
            value={formData.pword || ""}
          />
          <div className="flex gap-4">
            <ShortAnswer
              type="text"
              name="first_name"
              label="First Name"
              onChange={handleChange}
              value={formData.first_name || ""}
            />
            <ShortAnswer
              type="text"
              name="last_name"
              label="Last Name"
              onChange={handleChange}
              value={formData.last_name || ""}
            />
          </div>

          <button
            onClick={handlePageChange}
            className="self-stretch mb-24"
            type="button"
          >
            <LongButton>Continue</LongButton>
          </button>
        </AuthPanel>
      ) : (
        <>
          <AuthPanel
            title="Register"
            bottomLabel="Already registered? "
            bottomLink="Sign In"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between">
              <DatePicker
                label="Birthdate"
                name="birth_date"
                onChange={handleChange}
                value={formData.birth_date || ""}
                className="w-40"
              />
              <DatePicker
                label="Graduation Date"
                name="grad_date"
                onChange={handleChange}
                value={formData.grad_date || ""}
                className="w-40"
              />
            </div>
            <div className="flex justify-between">
              <ShortAnswer
                label="First Competition Year"
                type="number"
                min="1900"
                max="9999"
                name="first_comp_year"
                onChange={handleChange}
                value={formData.first_comp_year || ""}
              />
              <Dropdown
                options={experiences}
                label="Experience Level"
                name="xp"
                onChange={handleChange}
                value={formData.xp || ""}
              />
            </div>
            <Dropdown
              options={colleges}
              label="College"
              name="college"
              onChange={handleChange}
              value={formData.college || ""}
            />
            <div className="flex justify-between gap-2">
              <Dropdown
                options={sexes}
                label="Sex"
                name="sex"
                onChange={handleChange}
                value={formData.sex || ""}
              />

              <Dropdown
                options={studentTypes}
                label="Student Type"
                name="student_type"
                onChange={handleChange}
                value={formData.student_type || ""}
              />
            </div>
            <button onClick={handleSubmit} type="submit">
              submit
            </button>
            <button
              onClick={handlePageChange}
              className="self-stretch mb-20"
              type="button"
            >
              <LongButton>Back</LongButton>
            </button>
          </AuthPanel>
        </>
      )}
    </>
  );
}
