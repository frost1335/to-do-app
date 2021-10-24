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
    search: [
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
    i: 1,
    t: 1,
    s: 1,
    c: 1,
  };

  componentDidMount() {
    console.log(this.props.data);
  }

  onResetHandler = () => {
    document.querySelector("#search").value = "";
    this.setState({
      search: this.state.tests,
    });
  };

  listItems() {
    let arr = this.state.search;

    if (arr.length) {
      return arr.map((list, index) => {
        return (
          <li key={list.id}>
            <span className={`site-${list.siteId}`}></span>
            <DashboardList
              id={list.id}
              name={list.name}
              type={list.type}
              status={list.status}
              site={this.state.sites[list.siteId - 1].url}
              btn={list.status === "DRAFT" ? "Results" : "Finalize"}
            />
          </li>
        );
      });
    }

    return (
      <div className="resetBox">
        <p>Your search did not match any results.</p>
        <button onClick={this.onResetHandler}>Reset</button>
      </div>
    );
  }

  render() {
    const onSearchHandler = (event) => {
      const val = event.target.value.toLowerCase().trim();
      const tests = this.state.tests.filter((c) => {
        return c.name.toLowerCase().trim().indexOf(val) !== -1;
      });
      this.setState({
        search: tests,
      });
    };
    const onToggleName = () => {
      let arr;
      this.setState({
        i: (this.state.i += 1),
      });
      if (this.state.i % 2 === 0) {
        arr = this.state.search.sort((a, b) => {
          const nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      } else {
        arr = this.state.search.reverse();
      }
      this.setState({
        search: arr,
      });
    };
    const onToggleType = () => {
      let arr;
      this.setState({
        i: (this.state.t += 1),
      });
      if (this.state.t % 2 === 0) {
        arr = this.state.search.sort((a, b) => {
          const nameA = a.type.toLowerCase(),
            nameB = b.type.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      } else {
        arr = this.state.search.reverse();
      }
      this.setState({
        search: arr,
      });
    };
    const onToggleSite = () => {
      let arr;
      this.setState({
        i: (this.state.s += 1),
      });
      if (this.state.s % 2 === 0) {
        arr = this.state.search.sort((a, b) => {
          const nameA = this.state.sites[a.siteId - 1].url
              .replace("https://", "")
              .replace("www.", "")
              .replace("http://", "")
              .toLowerCase(),
            nameB = this.state.sites[b.siteId - 1].url
              .replace("https://", "")
              .replace("www.", "")
              .replace("http://", "")
              .toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      } else {
        arr = this.state.search.reverse();
      }
      this.setState({
        search: arr,
      });
    };
    const onToggleStatus = () => {
      let arr;
      this.setState({
        i: (this.state.c += 1),
      });
      if (this.state.c % 2 === 0) {
        arr = this.state.search.sort((a) => {
          if (a.status === "ONLINE") return -1;
          if (a.status === "PAUSED") return 5;
          if (a.status === "STOPPED") return 10;
          if (a.status === "DRAFT") return 15;
          return 0;
        });
      } else {
        arr = this.state.search.reverse();
      }
      this.setState({
        search: arr,
      });
    };

    return (
      <div>
        <div className="dashboardHeader">
          <h2 className="headerTitle">Dashboard</h2>
          <div className="headerInput">
            <i>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </i>
            <input
              type="text"
              id="search"
              placeholder="What test are you looking for?"
              onChange={onSearchHandler}
            />
            <span className="results">{this.state.search.length} tests</span>
          </div>
        </div>

        <div className="dashboardBody">
          <div className="itemHead item">
            <div className="itemName nameST" onClick={onToggleName}>
              Name
              {this.state.i % 2 === 0 ? (
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
                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
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
                    d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
            <div className="itemType typeST" onClick={onToggleType}>
              Type
              {this.state.t % 2 === 0 ? (
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
                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
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
                    d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
            <div className="itemStatus statusST" onClick={onToggleStatus}>
              Status
              {this.state.c % 2 === 0 ? (
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
                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
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
                    d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
            <div className="itemSite siteST" onClick={onToggleSite}>
              Site
              {this.state.s % 2 === 0 ? (
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
                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
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
                    d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </div>
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
