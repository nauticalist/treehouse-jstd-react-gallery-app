import React from "react";
import SearchForm from "./common/SearchForm";
import Navbar from "./common/Navbar";

const NotFound = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <Navbar />
      <h1>Not Found</h1>
    </React.Fragment>
  );
};

export default NotFound;
