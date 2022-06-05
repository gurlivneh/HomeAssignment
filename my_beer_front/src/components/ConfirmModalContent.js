import styled from 'styled-components';
import React from 'react';
import { removeAllFromFavorite } from '../redux/reducers/beersReducer';
import { favoritesDeleteAll } from '../redux/reducers/favoritesReducer';
import { useDispatch } from 'react-redux'

const ConfirmModalContent = (props) => {

    const { closeModal, setShowRemoveButton } = props
    const dispatch = useDispatch()

    const handleOkPress = () => {
        dispatch(removeAllFromFavorite())
        dispatch(favoritesDeleteAll())
        // setShowRemoveButton(false)
        closeModal()
    }
    const handleCancelPress = () => {
        closeModal()
    }
    
    return (
        <Container>
            <Title>Are You Sure?</Title>
            <Title>Click Ok To Remove All Favorites</Title>
            <ButtonsRow>
                <Button onClick={handleOkPress} >OK</Button>
                <Button onClick={handleCancelPress}>CANCEL</Button>
            </ButtonsRow>
        </Container>
    )
}

export default ConfirmModalContent

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:grey;
    flex-direction:column;
    height:470px;
    width: 400px;
`;

const Title = styled.h4`
    display: flex;
    font-size: 14;
`;

const Button = styled.button`
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 100px;
    margin: 10px;
`;

const ButtonsRow = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
