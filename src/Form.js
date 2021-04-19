import React from "react";
import "./index.css";


function OrderForm(props) {
    const {values, submit, change, errors, disabled} = props

    const onSubmit = event=> {
        event.preventDefault();
        submit(alert(`
            Customer Name: ${values.firstName} ${values.lastName}
            Crust Type: ${values.crust}
            Sauce Type: ${values.sauce}
            Special Instructions: ${values.instructions}`
            ))
    }

    const onChange = event => {
        let {name,value} = event.target
        if(event.target=== 'checkbox') {
          value = event.target.checked
        }
        change(name,value)
    }

    return (
        <div className = 'pizza-order-body'>
            <form className = 'pizza-order-form' onSubmit={onSubmit}>
                <div>
                    <label>
                        First Name:
                        <input 
                            value = {values.firstName}
                            onChange = {onChange} 
                            name = 'firstName' 
                            type = 'text' />
                    </label>
                    <label>
                        Last Name:
                        <input 
                            value = {values.lastName}
                            onChange = {onChange} 
                            name = 'lastName' 
                            type = 'text' />
                    </label>
                </div>
                <div className='crustOptions'>
                    <label>
                        Pick your crust:
                        <select
                            onChange = {onChange}
                            value = {values.crust}
                            name = 'crust'
                        >
                            <option value = 'select'> ---Select Your Crust ---</option>
                            <option value = 'individual'> Individual </option>
                            <option value = 'medium'> Medium </option>
                            <option value = 'large'> Large </option>
                            <option value = 'deluxfamily'> Delux Family</option>
                        </select>
                        </label>

                        <div className='crustOptions'>
                            <label>
                                Pick your sauce:
                                <select
                                    onChange = {onChange}
                                    value = {values.sauce}
                                    name = 'sauce'
                                >
                                    <option value = 'select'> ---Select Your sauce ---</option>
                                    <option value = 'tomato'> Tomato Sauce </option>
                                    <option value = 'garlic'> Garlic Sauce </option>
                                    <option value = 'BBQ'> BBQ Sauce </option>
                                    <option value = 'alfredo'> Alfredo Sauce</option>
                                </select>
                            </label>
                        </div>
                    
                    <label> Pick your toppings:
                        <label> Pepperoni
                            <input
                            name = 'pep'
                            type = 'checkbox'
                            checked = {values.pep}
                            onChange = {onChange}
                            />
                        </label>
                                
                            <label> Sausage
                                <input 
                                    name = 'sausage'
                                    type = 'checkbox'
                                    checked = {values.sausage}
                                    onChange = {onChange}
                                    />
                            </label>
                            <label> Mushroom
                                <input 
                                    name = 'mushroom'
                                    type = 'checkbox'
                                    checked = {values.mushroom}
                                    onChange = {onChange}
                                    />
                            </label>
                            <label> Green Peppers
                                <input 
                                    name = 'greenPep'
                                    type = 'checkbox'
                                    checked = {values.greenPep}
                                    onChange = {onChange}
                                    />
                                </label>
                    </label>
                </div>
                    <div className = 'special'>
                        <label> Your special instructions:
                            <input 
                                name = 'special'
                                type = 'text'
                                value = {values.instructions}
                                onChange = {onChange}
                            />
                        </label>
                    </div> 
    <button disable = {disabled} className = 'orderButton'>Add to Order</button>
                <div className = 'errors'>
                <div>{errors.firstName}</div>
                <div>{errors.lastName}</div>
                <div>{errors.crust}</div>
                <div>{errors.sauce}</div>
                <div>{errors.instructions}</div>
                </div>
            </form>
        </div>
    )

}


export default OrderForm;