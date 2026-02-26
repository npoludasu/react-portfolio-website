import React from "react";
import locationIcon from "../assets/icons/location.svg";
import officeIcon from "../assets/icons/office.svg";
function Work({ position, company, location, type, duration ,role = [] }) {
  return (
    <article className="pt-4 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl font-semibold">
          {position}
        </h1>
        <div className="btn bg-green-200 text-green-600 text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <img src={officeIcon} alt=""></img>
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {company}
            </p>
          </div>
          <div className="flex items-center">
            <img src={locationIcon} alt=""></img>
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {location}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">
          {duration}
        </p>
      </div>
      {role.length > 0 && (
        <ul className="list-disc list-inside space-y-1 mt-3">
          {role.map((item, index) => (
            <li
              key={index}
              className="text-content text-xs md:text-sm font-normal"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default Work;
