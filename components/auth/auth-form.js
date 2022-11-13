import { useState, useRef } from "react";
import {signIn} from 'next-auth/client';
import classes from "./auth-form.module.css";

async function createUser(email, password){
    const response = await fetch('/api/auth/signup' , {
       method: 'POST',
       body: JSON.stringify({email, password}),
       headers: {
        'Content-type' : 'application/json',
       },
    });
    const data = await response.json();

    if(!response.ok){
        //console.log(response.ok);
        throw new Error(data.message || 'something went wrong');
    }

    return data;
}

function AuthForm() {
    const emailInputRef = useRef();
    const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevstate) => !prevstate);
  }


 async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passwordRef.current.value;

    if(isLogin){
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPass
      });
      console.log(result);
             
    }else{
      try{
        const result = await createUser(enteredEmail, enteredPass);
        console.log(result);
      } catch (error){
        console.log(error);
      }

      
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Log in" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Log in with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
export default AuthForm;
