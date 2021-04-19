import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Primary Div 
export const MainDiv = styled.div`
display: block;
flex-flow: column nowrap;
margin: 0px;
padding: 0px;
background: rgb(255,0,0);
background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,119,0,0.8323704481792717) 100%);
`; 

//Navigation Styling
export const NavDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;
    border-bottom: solid 5px;
    border-bottom-color: rgba(255,119,0);
    border-bottom-color: linear-gradient(90deg, rgba(255,102,0,0.8323704481792717) 0%, rgba(255,21,0,1) 49%, rgba(255,0,0,1) 100%);
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px 10px;
    `;

export const NavHeader = styled.h1`
    align-self: center;
    font-family: 'Anton', sans-serif;
    background: rgb(242,7,7);
    background: linear-gradient(90deg, rgba(242,7,7,1) 0%, rgba(255,175,0,0.8267682072829132) 100%);
    color: White;
    border: solid 3px linear-gradient(90deg, rgba(242,7,7,1) 0%, rgba(255,175,0,0.8267682072829132) 100%);;
    padding: 10px 20px;
    box-shadow: 5px 5px 5px rgba(43, 4, 2, .5);
`;

export const NavLinks = styled.div`
    align-self: center;
    display: flex;
    font-weight: bold;
    font-family: Lato, sans-serif;
    `;

export const ButtonLinks = styled(Link)`
    background-color: red;
    color: white;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 5px;
    margin-left: 0px;
    padding: 10px 30px;
    box-shadow: 3px 3px 3px rgba(43, 4, 2, .5);
`;

// Hero Styling
export const HeroDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
   
`;

export const HeroText = styled.h2`
    color: white;
    align-self: center;
    
    font-family: 'Anton', sans-serif;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;
`;


export const PizzaButton = styled(ButtonLinks)`
    align-items: center;
    border-radius: 20%;
    border: none;
    box-shadow: 5px 5px 5px rgba(43, 4, 2, .5);
    
`;

// First Row of Cards
export const TopCards = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 95%;
    margin: 20px;
    
`;

export const CardBox = styled.div`
    width: 25vw;
    height: 20vh;
    background: red;
    margin: 10px 10px;
    padding: 10px;
`;

export const CardText = styled.h2`
justify-content: center;
color: #333333;
background: #FFFFFF;
padding: 10px;
text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15);
`;



// Second Row of Cards
export const BottomCards = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 95%;
    margin: 20px;
    
`;

//Footer
export const Footer = styled.p`
    display: flex;
    justify-content: center;
`;
 

 