import React from 'react'
import Input from '../../shared/components/FormElements/Input'

import {     
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
    } from '../../shared/util/validator'
import Button from '../../shared/components/FormElements/Button';
import {useForm} from '../../shared/hooks/form-hooks'
import './NewPlace.css'

const AuthPlace =() => {


    const [formState, inputHandler] = useForm(
        { 
        username: {
            value: '',
            isValid: false
          },
          email: {
            value: '',
            isValid: false
          },
          password: {
            value: '',
            isValid: false
          }
        },
         false
        );


        const authSubmitHandler = event => {
            event.preventDefault();
            console.log(formState.inputs);
          };
          

    return(
     <form className="place-form" onSubmit={authSubmitHandler}>
       
         <Input 
        id='username'
        element="input"
        type="text"
        label="UserName" 
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Min 5 char Username'
        onInput={inputHandler}
        />

         <Input 
         id='email'
         element="input"
         type="text"
         label="Email"
         validators={[VALIDATOR_EMAIL()]}
         errorText='Please enter a valid Email'
         onInput={inputHandler}
         />

         <Input
         id='password'
         element="input"
         type="text"
         label="Password"
         validators={[VALIDATOR_MINLENGTH(6)]}
         errorText='Min 6 char password'
         onInput={inputHandler}
         />

         <Button type="submit" disabled={!formState.isValid}>
             Submit
         </Button>
       
     </form>
    )
}

export default AuthPlace 

/*


const NewPlace = () => {
    const [formState, inputHandler] = useForm(
      { 
        title: {
          value: '',
          isValid: false
        },
        description: {
          value: '',
          isValid: false
        },
        address: {
          value: '',
          isValid: false
        }
      },
       false
      );
    
    
    const placeSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs);
    };
    
    
      return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at least 5 characters)."
            onInput={inputHandler}
          />
          
          <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler}
        />
    
          <Button type="submit" disabled={!formState.isValid}>
            ADD PLACE
          </Button>
        </form>
      );
    };
    
    export default NewPlace; */