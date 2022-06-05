import styled from 'styled-components';
import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { BiBeer } from "react-icons/bi";
import { updateFavorites } from '../redux/reducers/beersReducer';
import { favoritesAdd, favoritesRemove, favoriteGrade } from '../redux/reducers/favoritesReducer';
import { useDispatch } from 'react-redux';
import Select from 'react-select'


const BeerCard = (props) => {
    const { item, handleCardClick, isFavoriteScreen } = props
    const dispatch = useDispatch()
    const handleClick = () => {
        if (item.isFavorite || isFavoriteScreen) {
            dispatch(favoritesRemove(item.name))
        }
        else {
            dispatch(favoritesAdd(item))
        }
        dispatch(updateFavorites(item.name))
    }

    const selectOptions = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3,  label: '3' },
        { value: 4,  label: '4' },
        { value: 5,  label: '5' },

    ]
    const handleSelectChange = (value) => {
        console.log('value', value)
        dispatch(favoriteGrade({grade:value, name:item.name}))

    }

  

    return (
        <Container>
            <SelectContainer>
                {isFavoriteScreen &&
                    <Select 
                    options={selectOptions}           
                    defaultValue={{ value: item.grade ? item.grade : 1,  label: item.grade ? item.grade : 1} }
                    onChange={(option) => handleSelectChange(option.value)}
                    ></Select>}
            </SelectContainer>
            <BeerContainer onClick={handleCardClick}>
                {item.image_url ?
                    <Image src={item.image_url} /> :
                    <BiBeer style={{ height: "100px", width: "100px" }} />}
                <Title>{item.name}</Title>
            </BeerContainer>
            <StarContainer>
                {item.isFavorite || isFavoriteScreen ?
                    <AiTwotoneStar style={{ color: "yellow" }} onClick={handleClick} /> :
                    <AiOutlineStar onClick={handleClick} />}
            </StarContainer>
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
    cursor: pointer;
    width: 70%;


`;

const StarContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    height:10%;
    width: 15%;
    cursor: pointer;


`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    height:100%;
    width: 15%;


`;

const Title = styled.h4`
    display: flex;
    font-size: 14;
`;

const Image = styled.img`
   height: 200px;
   width: 80px;
`;