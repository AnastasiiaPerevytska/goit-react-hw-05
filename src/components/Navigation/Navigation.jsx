import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export const Navigation = () => {
  return (
    <>
      <div className={s.nav}>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/movies">
          Movies
        </NavLink>
      </div>
    </>
  );
};