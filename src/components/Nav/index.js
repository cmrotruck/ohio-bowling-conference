import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "../Home";

export default function Nav() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Schools") {
      //return schools
    }
    if (currentPage === "Schedule") {
      //return Schedule
    }
    if (currentPage === "Womens") {
      //return Womans Standings
    }
    if (currentPage === "Mens") {
      //retirms Mens Stamdomgs
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="">
      <header className="">
        <div>
          {/* We are passing the currentPage from state and the function to update it */}
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </header>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
