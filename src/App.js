import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./index.css";
import OrderForm from "./form.js";
import { Footer, BottomCards, CardText, CardBox, TopCards, PizzaButton, HeroText, HeroDiv} from './styled'

const App = () => {
  return (
         <MainDiv>
              <NavDiv>
                  <NavHeader>Lambda Eats</NavHeader>
                  <NavLinks>
                  <ButtonLinks to="/">Home</ButtonLinks>
                  <ButtonLinks to="help">Help</ButtonLinks>
                  </NavLinks>
              </NavDiv>
  
              <HeroDiv>
                       <div className="Logo"> 
                          <HeroText>Your favorite food while coding</HeroText>
                          <PizzaButton to={OrderForm}>Want Pizza?</PizzaButton>
                      </div>
                      
              </HeroDiv>
  
              <TopCards>
                      <CardText>Best Food Deliver for those late night pushes!</CardText>
                      <CardBox>
                          <div>
                          <button>McDonalds</button> 
                          </div>
                      </CardBox>
                      <CardBox>
                          <div>
                          <button>Taco Bell</button> 
                          </div>    
                      </CardBox>
                      <CardBox>
                          <div>
                          <button>Subway</button> 
                          </div>
                      </CardBox>
  
              </TopCards>
              <BottomCards>
                      <CardText>Best Food Deliver for those late night pushes!</CardText>
                      <CardBox>
                          <div>
                          <button>McDonalds</button> 
                          </div>
                      </CardBox>
                      <CardBox>
                          <div>
                          <button>Taco Bell</button> 
                          </div>    
                      </CardBox>
                      <CardBox>
                          <div>
                          <button>Subway</button> 
                          </div>
                      </CardBox>
  
              </BottomCards>
  
              <Footer>
                  <p>Copyright 2020 - WebPT23</p>
              </Footer>
            
          
  {/* 
  <Route exact path="/" component={App} />
  <Route exact path="/pizza" component={OrderForm} /> */}
  </MainDiv>
  );
};
export default App;


