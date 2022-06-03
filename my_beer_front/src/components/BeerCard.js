import styled from 'styled-components';
import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';


const BeerCard = (props) => {

    const { item } = props
    let isFavorite = false
    return (
        <Container>
            <Image src={item.image_url} />
            <Title>{item.name}</Title>
            { isFavorite ? <AiTwotoneStar style={{color:"yellow"}}/> : <AiOutlineStar/>}
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