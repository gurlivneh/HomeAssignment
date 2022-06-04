import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from "../screens/Main";
import Favorites from "../screens/Favorites";
import Modal from 'react-modal';
import BeerModalContent from "../components/BeerModalContent";
import ErrorModalContent from "../components/ErrorModalContent";
import styled from 'styled-components';

const MyRouter = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalType, setModaType] = React.useState("beer");
  const [beerId, setBeerId] = React.useState();

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <MainContainer>
      <Router>
        <NavContainer>
          <Title>My Beer Buddy</Title>
          <Link to="/">Main</Link>
          <Link to="/favorites">Favorites</Link>
        </NavContainer>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={ModalCustomStyles}
          ariaHideApp={false}>
          {modalType === "beer" && <BeerModalContent beerId={beerId} />}
          {modalType === "error" && <ErrorModalContent />}
        </Modal>
        <Routes>
          <Route path="/" element={<Main openModal={openModal} setModalType={setModaType} setBeerId={setBeerId} />} />
          <Route path="/favorites" element={<Favorites openModal={openModal} setModaType={setModaType} setBeerId={setBeerId} />} />
        </Routes>
      </Router>
    </MainContainer>
  )

}

export default MyRouter

const MainContainer = styled.div`
    background-color: yellow;


`;

const NavContainer = styled.nav`
    background-color: lawngreen;
    padding: 5px;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    width:400px;
    display: flex;
    flex-direction: row;
    background-color: transparent;

`;
const Title = styled.h4`
    display: flex;
    font-size: 14;
`;


const ModalCustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};