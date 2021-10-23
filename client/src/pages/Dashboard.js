import React, { Component } from "react";
import { DashboardList } from "../components/DashboardList";

class Dashboard extends Component {
  state = {
    sites: [
      {
        id: 1,
        url: "https://market.company.com",
      },
      {
        id: 2,
        url: "https://www.delivery.company.com",
      },
      {
        id: 3,
        url: "http://games.company.com",
      },
    ],
    tests: [
      {
        id: 1,
        name: "Prototype of the new map",
        type: "CLASSIC",
        status: "PAUSED",
        siteId: 2,
      },
      {
        id: 2,
        name: "Dark theme test",
        type: "MVT",
        status: "DRAFT",
        siteId: 3,
      },
      {
        id: 3,
        name: "New Year's Sale",
        type: "MVT",
        status: "STOPPED",
        siteId: 1,
      },
      {
        id: 4,
        name: "Order basket redesing",
        type: "CLASSIC",
        status: "ONLINE",
        siteId: 1,
      },
      {
        id: 5,
        name: "Spring promotion",
        type: "SERVER_SIDE",
        status: "DRAFT",
        siteId: 2,
      },
      {
        id: 6,
        name: "Prototype of a new header",
        type: "SERVER_SIDE",
        status: "ONLINE",
        siteId: 3,
      },
      {
        id: 7,
        name: "New Year's Sale Copy 1",
        type: "MVT",
        status: "DRAFT",
        siteId: 1,
      },
    ],
  };

  listItems() {
    return this.state.tests.map((list, index) => {
      return (
        <DashboardList
          key={list.id}
          id={list.id}
          name={list.name}
          type={list.type}
          status={list.status}
          site={this.state.sites[list.siteId - 1].url}
          btn={list.status === "DRAFT" ? "Results" : "Finalize"}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="dashboardHeader">
          <h2 className="headerTitle">Dashboard</h2>
          <div className="headerInput">
            <i>S</i>
            <input
              type="text"
              id="search"
              placeholder="What test are you looking for?"
            />
            <span className="results">7 tests</span>
          </div>
        </div>

        <div className="dashboardBody">
          <div className="itemHead">
            <div className="itemName">Name</div>
            <div className="itemType">Type</div>
            <div className="itemStatus">Status</div>
            <div className="itemSite">Site</div>
            <div className="itemBtn"></div>
          </div>
          <div>
            <ul className="menu">{this.listItems()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
