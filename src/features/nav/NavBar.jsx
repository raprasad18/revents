import React, { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignediNMenu from "./SigendInMenu";

export default function NavBar({ setFormOpen }) {
    const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

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
          <SignediNMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
