import React, { useState } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  logOut,
  selectActualUser,
} from "../../redux/features/login/loginSlice";
import { useAppDispatch } from "../../redux/store";
import Cart from "./Cart";
import { resetStore } from "../../redux/features/pokemon/pokemonSlice";

type Props = {};

const NavBar: React.FC<Props> = (props) => {

  const dispatch = useAppDispatch();

  const user = useSelector(selectActualUser());
  const handleLogout = () => {
    dispatch(resetStore())
    dispatch(logOut());
  }

  return (
    <Navbar variant="dark" expand="lg">
      <div className="navContainer">
        <h1 className="navTitle">PokeStore</h1>

        <div className="navData">
          <span>{user?.userName}</span>
          <NavDropdown
            title={
              user?.userImage ? (
                <img
                  src={user?.userImage}
                  height="35"
                  className="d-inline-block align-top rounded-circle"
                />
                
              ) : (
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
                  height="35"
                  className="d-inline-block align-top rounded-circle"
                />
              )
            }
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                handleLogout()
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Cart />
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
