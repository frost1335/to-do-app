import React from "react";

export const DashboardList = (props) => {
  console.log(props);
  return (
    <div className="item">
      <div className="itemName">{props.name}</div>
      <div className="itemType">{props.type}</div>
      <div className="itemStatus">{props.status}</div>
      <div className="itemSite">{props.site}</div>
      <div className="itemBtn">{props.btn}</div>
    </div>
  );
};
