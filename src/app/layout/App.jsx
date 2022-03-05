import React from "react";
import EventDashboard from "../../features/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import { Sanbox } from "../../features/sanbox/Sanbox";
import ModalManager from "../common/modals/ModalManager";

function App() {
  const {key} = useLocation();
  return (
    <>
      <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route
          path={'/(.+)'}
          render={() => (
            <>
              <NavBar />
              <Container className='main'>
                <Route exact path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailedPage} />
                <Route path='/sanbox' component={Sanbox} />
                <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
              </Container>
            </>
          )} 
          />
    </>
  );
}

export default App;
