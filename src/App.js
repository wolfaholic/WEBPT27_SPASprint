import React from "react";
import { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import "./index.css";
import OrderForm from "./Form.js";
import * as yup from 'yup';
import axios from 'axios'
import FormSchema from "./FormSchema"
import { MainDiv, NavDiv, HeroDiv, HeroText, PizzaButton, TopCards, BottomCards, CardBox, CardText, NavHeader, NavLinks, ButtonLinks, Footer} from "./styled.js"
 


const initialFormValues = {
    firstName: '',
    lastName: '',
    instructions: '',
    crust: '',
    sauce: '',
    pep: false,
    sausage: false,
    mushroom: false,
    greenPep: false
  }
  
  const initialFormErrors = {
    firstName: '',
    lastName: '',
    crust: '',
    sauce: '',
    instructions: ''
  };
  
  const buttonValidation = 'true';
  const infoShowUp = [];
  
  
  function Home() {
  
    const history = useHistory();
  
    function nextPage() {
      return(
        history.push('/pizza')
      )
    }  

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
                        <PizzaButton to={nextPage}>Want Pizza?</PizzaButton>
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
    </MainDiv>
    );
  }
  
  function App() {
    const[formValues, setFormValues] = useState(initialFormValues)
    const[formErrors, setFormErrors] = useState(initialFormErrors)
    const[info, setInfo] = useState(infoShowUp)
    const[disabled, setDisabled] = useState(buttonValidation)
  
    const inputChange = (name,value) => {
      yup.reach(FormSchema, name)
        .validate(value)
        .then(res => {
          setFormErrors({...formErrors, [name]: ''})
        })
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
        setFormValues({...formValues, [name]: value});
    }
  
    const postInfo = newInfo => {
      axios.post('https://reqres.in/api/users', newInfo)
      .then(res => {
        console.log(res.data)
        setInfo([...info,res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      });
    };
  
    const formSubmittion = () => {
      const newInformation = {
        firstName: formValues.firstName.trim(),
        lastName: formValues.lastName.trim(),
        special: formValues.instructions.trim(),
        crust: formValues.crust.trim(),
        sauce: formValues.sauce.trim(),
        toppings:['pep', 'sausage', 'mushroom','greenPep'].filter(top => !!formValues[top])
      }
      postInfo(newInformation)
    }
  
    useEffect(() => {
      FormSchema.isValid(formValues)
        .then(isValid => {
          setDisabled(!isValid)
        })
    }, [formValues]);

  return (
    <div className = 'App'>
        <nav className = 'App-link'>
          <Link to = '/'>Home</Link>
          <Link to = '/help'>Help</Link>
        </nav>
        <Route exact path = '/'>
          <Home/>  
        </Route> 
        
        <Route exact path = '/pizza'>
          <OrderForm 
            values={formValues}
            change={inputChange}
            submit={formSubmittion}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>   
          
    </div>
  )
  };
  export default App;