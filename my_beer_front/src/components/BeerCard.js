import styled from 'styled-components';
import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { BiBeer } from "react-icons/bi";
import { updateFavorites } from '../redux/reducers/beersReducer';
import { favoritesAdd, favoritesRemove } from '../redux/reducers/favoritesReducer';
import { useDispatch } from 'react-redux'

const BeerCard = (props) => {
    const { item, handleCardClick } = props
    const dispatch = useDispatch()
    const handleClick = () => {
        if(item.isFavorite || props.isFavorite) {
            dispatch(favoritesRemove(item.name))
        }
        else {
            dispatch(favoritesAdd(item))
        }
        dispatch(updateFavorites(item.name))
    }

    return (
        <Container>
            <BeerContainer onClick={handleCardClick}>
                {item.image_url ?
                    <Image src={item.image_url} /> :
                    <BiBeer style={{ height: "100px", width: "100px" }} />}
                <Title>{item.name}</Title>
            </BeerContainer>
            <ButtonContainer>
                {item.isFavorite ||  props.isFavorite ?
                    <AiTwotoneStar style={{ color: "yellow" }} onClick={handleClick} /> :
                    <AiOutlineStar onClick={handleClick} />}
            </ButtonContainer>
        </Container>
    )
}

export default BeerCard

const Container = styled.div`
    display: flex;
    background-color:lightskyblue;
    height: 350px;
    width: 300px;
    margin: 5px;
    padding:5px;
`;

const BeerContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    width:99%;

`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height:5%;
    width: 5%;

`;

const Title = styled.h4`
    display: flex;
    font-size: 14;
`;

const Image = styled.img`
   height: 200px;
   width: 80px;
`;