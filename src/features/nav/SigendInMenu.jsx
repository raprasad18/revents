import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../auth/authAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function SignediNMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {currentUser} = useSelector(state => state.auth);

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src= {currentUser.photoURL || '/assets/user.png'} />
      <Dropdown pointing='top left' text= {currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My Profile' icon='user' />
          <Dropdown.Item
            onClick={() => {
              dispatch(signOutUser());
              history.push('/');
            }}
            text='Sign Out'
            icon='power'
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
