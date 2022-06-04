import styled from 'styled-components';
import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { favoritesAdd, favoritesRemove } from '../redux/reducers/favoritesReducer';
import { beersUpdate } from '../redux/reducers/beersReducer';
import { useSelector, useDispatch } from 'react-redux'


const BeerCard = (props) => {

    const { item } = props
    const dispatch = useDispatch()
    const handleClick = () => {
        // dispatch(favoritesAdd({name: item.name, image_url:item.image_url, id:item.id}))
        dispatch(beersUpdate(item.id))

    }

    return (
        <Container>
            <Image src={item.image_url} />
            <Title>{item.name}</Title>
            { item.isFavorite ? <AiTwotoneStar style={{color:"yellow"}} onClick={handleClick}/> : <AiOutlineStar onClick={handleClick}/>}
        </Container>
    )
}

export default BeerCard

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:white;
    flex-direction:column;
    height: 400px;
    width: 300px;
    margin: 5px;
`;

const Title = styled.h4`
    display: flex;
    font-size: 14;
`;

const Image = styled.img`
   height: 200px;
   width: 80px;
`;