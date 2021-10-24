import React from "react";

export const Results = () => {
  let search = window.location.href;
  console.log(search.replace("http://localhost:3000/finalize/", ""));
  return (
    <div>
      <h1>Results</h1>
    </div>
  );
};
