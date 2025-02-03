import React from 'react';
import { Container } from 'react-bootstrap';
import {isAuthenticated} from "../components.js";

const Mypuzzles = () => {
  return (
    <Container>
            <div>
            <h2>My Puzzles</h2>
            </div>
            {isAuthenticated() ? (
              <p>Description</p>
            ) : (
              <p>You need to Log in First</p>
            )}
    </Container>
  );
}

export default Mypuzzles;