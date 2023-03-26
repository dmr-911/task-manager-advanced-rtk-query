import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateFilters } from "../features/filter/filterSlice";

const Navbar = () => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(updateFilters({ search: e.target.value }));
  };
  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
          <input
            type="text"
            placeholder="Search Task"
            className="search-input text-black"
            id="lws-searchTask"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
