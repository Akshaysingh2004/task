import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FaUser, FaSignOutAlt, FaInfoCircle, FaUserCircle } from 'react-icons/fa';

const MainPage = ({ handleSignOut }) => {
  const user = useSelector(state => state.user);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
  };

  return (
    <Container style={{ position: "relative", width: "100%", height: "100vh", padding: "2rem" }}>
     
      <Button 
        variant="primary" 
        onClick={toggleProfileModal}
        style={{ position: "absolute", top: "20px", left: "20px" }}
      >
        <FaUserCircle /> Profile
      </Button>
<h2 class="text-center text-primary fw-bol">WELCOME</h2>
     
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <p>
          This is your main dashboard. Here you can manage your account, view recent activities, and explore new features.
        </p>
        
        <Button variant="danger" onClick={handleSignOut} className="mt-3">
          <FaSignOutAlt /> Sign Out
        </Button>
      </div>

     
      <Modal show={showProfileModal} onHide={toggleProfileModal} centered>
        <Modal.Header closeButton>
          <Modal.Title><FaUserCircle />My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p style={{ fontWeight: 'bold' }}> Username: {user?.username}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleProfileModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MainPage;
