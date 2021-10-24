import React, { useCallback } from "react";

export const Finalize = (props) => {
  const request = useCallback(async () => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
  });

  request();

  let search = window.location.href;
  console.log(search.replace("http://localhost:3000/finalize/", ""));
  return (
    <div>
      <h1>Finalize</h1>
    </div>
  );
};
