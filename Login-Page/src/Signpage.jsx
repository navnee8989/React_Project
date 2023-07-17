import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from "axios"
import { useNavigate } from "react-router-dom";

import CustomHook from "./Commancomponant/Custom/CustomHook";
import Header from "./Commancomponant/Header";



function Signpage() {
  const{handleChange,inp}=CustomHook({"role":2},{});
  const[Sstate,setSstate]=useState({FormData: ""})
  const navigate = useNavigate()
  
  const submitData = async (event) =>{
    event.preventDefault()
    
    axios.post("http://localhost:5001/user",inp).then(response =>{
      console.log("Success DATA STORE");
      console.log(response.data.email);
      // navigate("/login")
      
    }).catch(error =>{
      console.log(error);
    })
    if (inp.value == "") {
      throw new console.error("not Valid data");
    }
    else{
      navigate("Login")
    }
      // fetch('http://localhost:5001/user',{
      //   method: "POST",
      //   headers:{'Content-Type': "application/json"},
      //   body: JSON.stringify(inp)
      // }).then((res)=>res.json()).then((result)=>{
      //   console.log("successfull");
      // })
        // const API_URL= 'http://localhost:5001/user'

        // console.log(API_URL);
      // axios.post('http://localhost:5001/user',inp).then(response =>{
      //   console.log("data store ss");
        
      // }).catch(error=>{
      //   console.log(error,"not store");
      // })

      //   axios.post('http://localhost:5001/user',inp).then(response =>{
      //   console.log("success Data store");
      // }).catch(error=>{
      //   console.log(error);
      // })
  }

  return (
    <Fragment>
    {/* <Header /> */}
      <Container>
        <h1>facebook</h1>
        <Box>
          <Title>
            <div>
              <h2>Create a new account</h2>
              <span>It's quick and easy.</span>
            </div>
          </Title>
          <Data>
       
            <form >
        
              <input type="email" name="email" placeholder="Email"
              onChange={handleChange}
              required
               />
              <input type="password" name="password" placeholder="Password"
              onChange={handleChange}
              required
               />
              
              <button type='button' onClick={submitData}>
                Sign in
              </button>
              <span>Already Have Account</span>
            </form>
          </Data>
        </Box>
      </Container>

    </Fragment>
  );
}

export default Signpage;




const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
  h1 {
    color: blue;
    text-align: center;
    font-size: 50px;
  }
`;
const Box = styled.div`
  /* border: 1px solid red; */
  border-radius: 20px;
  width: 32%;
  height: 80vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin: 0 auto;
`;
const Title = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid gray;
  h2 {
    font-size: 25px;
    color: black;
    /* margin-top: 20px; */
    padding-top: 10px;
  }
  span {
    color: gray;
    margin-bottom: 20px;
    position: relative;
    bottom: 18px;
  }
`;
const Data = styled.div`
  form {
    ${'' /* padding-top: 50px; */}
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
  }

  button {
    width: 180px;
    padding: 15px 0;
    border: none;
    border-radius: 10px;
    color: white;
    background: #22c92d;
    position: relative;
    top: 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    /* padding-top: 10px; */
    &:hover {
      background-color: green;
    }
  }
  input {
    margin: 5px 10px;
    width: 87%;
    height: 60px;
    /* padding-left: 10px; */
    padding: 7px 0 7px 10px;
    font-size: 17px;
    /* color: gray; */

    border: 1px solid gray;
    border-radius: 10px;
    /* opacity: 0.7; */
    font-family: Arial, Helvetica, sans-serif;
  }
  span {
    text-decoration: underline;
    color: blue;
    padding-top: 50px;
  }
`;