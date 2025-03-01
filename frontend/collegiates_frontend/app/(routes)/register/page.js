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
  const experiences = ["B", "I", "A"];
  const [colleges, setColleges] = useState([]);
  const sexes = ["M", "F"];
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
        setColleges(json.map(({ college_name }) => college_name))
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
      <div
        id="bg-component"
        className="bg-secondary h-screen w-full skew-y-6 absolute -top-[50vh] left-0 -z-20"
      ></div>
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
                value={formData.birth_date || ""}
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
              options={sexes}
              label="Sex"
              name="sex"
              onChange={handleChange}
              value={formData.sex || ""}
            />
            <Dropdown
              options={colleges}
              label="College"
              name="college"
              onChange={handleChange}
              value={formData.college || ""}
            />
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
