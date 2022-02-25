import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

export default function NavBar({setFormOpen}) {
    return (
      // fixed='top'
        <Menu inverted >
          <Container>
            <Menu.Item header>
                <img src="/assets/logo1.png" alt="logo" style={{marginRight: 20}} />
                Re-vents
            </Menu.Item>
            <Menu.Item name='Events' />
            <Menu.Item>
                <Button onClick={()=> setFormOpen(true)} positive inverted content='Create Events'/>
            </Menu.Item>
            <Menu.Item position='right'>
                <Button basic inverted content='Login'/>
                <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
            </Menu.Item>
            </Container>
        </Menu>
      
    )
}
