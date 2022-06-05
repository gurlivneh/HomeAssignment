import React ,{ useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useSearchParams
} from "react-router-dom";
import Main from "../screens/Main";
import Favorites from "../screens/Favorites";
import Modal from 'react-modal';
import BeerModalContent from "../components/BeerModalContent";
import ErrorModalContent from "../components/ErrorModalContent";
import ConfirmModalContent from "../components/ConfirmModalContent";
import styled from 'styled-components';

const RouterWithModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("beer");
  const [beerId, setBeerId] = useState();
  const [showRemoveButton, setShowRemoveButton] = useState(false)


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  return (
    <MainContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={ModalCustomStyles}
        ariaHideApp={false}
        >
        {modalType === "beer" && <BeerModalContent beerId={beerId} closeModal={closeModal}/>}
        {modalType === "error" && <ErrorModalContent closeModal={closeModal}/>}
        {modalType === "confirm" && <ConfirmModalContent closeModal={closeModal} setShowRemoveButton={setShowRemoveButton}/>}
      </Modal>
      <Router>
        <NavContainer>
          <Title>My Beer Buddy</Title>
          <Link to="/">Main</Link>
          <Link to="/favorites">Favorites</Link>
        </NavContainer>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                openModal={openModal}
                closeModal={closeModal}
                setModalType={setModalType}
                setBeerId={setBeerId} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                openModal={openModal}
                closeModal={closeModal}
                setModalType={setModalType}
                setBeerId={setBeerId} 
                setShowRemoveButton={setShowRemoveButton}
                showRemoveButton={showRemoveButton}
                />}
          />
        </Routes>
      </Router>
    </MainContainer>
  )

}

export default RouterWithModal

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
    height:'60%'
  },
};