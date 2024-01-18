import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    const SideBarData = [
        { title: "Dashboard", link: "dashboard" },
        { link: "/home", title: "Data Exploration" },
        { link: "/home", title: "Make-Model-year" },
        { link: "/home", title: "Dealer" },
        { link: "/home", title: "Claims" },
        { link: "/home", title: "Insights" },
        { link: "/home", title: "Safety Analytics 360" },
        { link: "/home", title: "Recommendations" },
        { link: "/home", title: "Configuration" },
        { link: "/home", title: "Data Source" },
        { link: "/home", title: "Conncections" },
        { link: "/usermanagement", title: "usermanagement" },
        { link: "/home", title: "Make" },
       
        { link: "/home", title: "Manual Data upload" },
       
        { link: "/home", title: "Custom Fields" },
      ];
    return (
        <>
        <div className="Sidebar">
          <ul className="SideBarList">
            {SideBarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div className="title">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
       
        </>
      );
    }


export default Sidebar
