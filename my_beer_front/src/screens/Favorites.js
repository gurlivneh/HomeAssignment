import React, { useEffect } from 'react';
import BeerCard from '../components/BeerCard';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

const Favorites = (props) => {
    const beers = useSelector(state => state.beers)
    const { openModal, setBeerId, setModalType, setShowRemoveButton, showRemoveButton } = props

    useEffect(() => {
        let indexOf = beers.indexOf(i => i.isFavorite === true)
        if (indexOf === -1) {setShowRemoveButton(false)}
      }, [beers]);

    const handleCardClick = (index) => {
        setModalType("beer")
        openModal()
        setBeerId(index)
    }

    const handleRemoveClick = () => {
        setModalType('confirm')
        openModal()
    }

    return (
        <MainContainer>
            <RemoveButton 
            onClick={handleRemoveClick}
            showRemoveButton={showRemoveButton}
            >
                Remove All
            </RemoveButton>
            <BeersContainer>
                {beers && beers.map((item, index) => {
                    if (item.isFavorite) {
                        if(!showRemoveButton) { setShowRemoveButton(true) }
                        return (
                            <BeerCard item={item} key={item.id} handleCardClick={() => handleCardClick(index)} />
                        )
                    }
                })}
            </BeersContainer>
        </MainContainer>
    )
}

export default Favorites

const MainContainer = styled.div`
    background-color: white;
    padding: 10px;
    justify-content: center;
    align-items: center;

`;

const BeersContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    padding:10px;
`;
const RemoveButton = styled.button`
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 100px;
    margin: 10px;
    margin-left:150px;
    visibility: ${props=>props.showRemoveButton ? "visible" : "hidden"};
`;

