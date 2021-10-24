import React from "react";
import { Link } from "react-router-dom";

export const Finalize = (props) => {
  const data = { ...props.data.data };
  let test;
  const sites = data.sites;
  if (data.tests) {
    let search = window.location.href;
    const testId = search.replace("http://localhost:3000/finalize/", "");
    test = data.tests.filter(
      (test) => test.id.toString() === testId.toString()
    );
  }
  let siteUrl;
  if (sites) {
    siteUrl = sites.map((c) => c.url);
  }
  return (
    <div>
      <h1 className="contentHeader">Finalize</h1>
      <p className="contentText">{test[0] ? test[0].name : null}</p>
      <p className="contentText">{test[0] ? test[0].type : null}</p>
      <p className="contentText">{test[0] ? test[0].status : null}</p>
      <p className="contentText">
        {test[0] ? siteUrl[test[0].siteId - 1] : null}
      </p>

      <Link
        style={{
          textDecoration: "none",
          cursor: "pointer",
          position: "absolute",
          bottom: "10%",
        }}
        to="/dashboard"
      >
        <button className="contentBtn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back
        </button>
      </Link>
    </div>
  );
};
