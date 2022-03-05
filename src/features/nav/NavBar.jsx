import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignediNMenu from "./SigendInMenu";
import { useSelector } from "react-redux";

export default function NavBar() {
  const {authenticated} = useSelector(state => state.auth);


  return (
    // fixed='top'
    <Menu inverted>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo1.png' alt='logo' style={{ marginRight: 20 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/sanbox' name='Sanbox' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Events' />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignediNMenu />
        ) : (
          <SignedOutMenu  />
        )}
      </Container>
    </Menu>
  );
}
