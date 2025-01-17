/* eslint-disable no-unused-vars */
import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
