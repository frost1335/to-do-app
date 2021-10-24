import React from "react";
import { Link } from "react-router-dom";

export const DashboardList = (props) => {
  const arrString = Array.from(props.type);
  const fT = arrString[0];
  arrString.splice(0, 1);
  const itemType = fT + arrString.join("").toLowerCase();
  return (
    <div className="item">
      <div className="itemName">{props.name}</div>
      <div className="itemType">{itemType}</div>
      <div className="itemStatus">
        {props.status === "ONLINE" ? (
          <span className="text-online">Online</span>
        ) : (
          ""
        )}
        {props.status === "PAUSED" ? (
          <span className="text-paused">Paused</span>
        ) : (
          ""
        )}
        {props.status === "DRAFT" ? (
          <span className="text-draft">Draft</span>
        ) : (
          ""
        )}
        {props.status === "STOPPED" ? (
          <span className="text-stopped">Stopped</span>
        ) : (
          ""
        )}
      </div>
      <div className="itemSite">
        {props.site
          .replace("https://", "")
          .replace("www.", "")
          .replace("http://", "")}
      </div>
      <div className="itemBtn">
        <Link
          to={`/${props.btn.toLowerCase()}/${props.id}`}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <button className={`btn-${props.btn}`}>{props.btn}</button>{" "}
        </Link>
      </div>
    </div>
  );
};
