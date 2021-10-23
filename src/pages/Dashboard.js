import React, { Component } from "react";
import { DashboardList } from "../components/DashboardList";

class Dashboard extends Component {
  state = {
    tests: [
      {
        name: "Order basket redesing",
        type: "Classic",
        status: "Online",
        site: "market.company.com",
        btn: "Results",
      },
    ],
  };

  listItems() {
    return this.state.tests.map((list, index) => {
      return (
        <DashboardList
          key={index}
          name={list.name}
          type={list.type}
          status={list.status}
          site={list.site}
          btn={list.btn}
        />
      );
    });
  }

  render() {
    return <div>{this.listItems()}</div>;
  }
}

export default Dashboard;
