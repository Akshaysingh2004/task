import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MainPage = ({ handleSignOut }) => {
  const user = useSelector(state => state.user);

  return (
    <Container style={{ width: "30rem", height: "32rem", textAlign: "center" }}>
      <Card>
        <Card.Body>
          <Card.Title className='fw-bold'>Welcome, {user?.username}</Card.Title>
          <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MainPage;
