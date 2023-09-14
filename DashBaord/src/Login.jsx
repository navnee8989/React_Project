import { React, useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [state, setstate] = useState({formdata: '' });
  const navigate = useNavigate();
  const [cookie, setcookie] = useCookies();
 




  const setLoginformdata = (event) => {
    const {name,value}=event.target
    setstate((koibhi) => ({
      formdata: { ...koibhi.formdata, [name]: value },
    }));
  };

const HandleSubmit = async (e) => {
  e.preventDefault();

  const params = new URLSearchParams({
    email: state.formdata.email,
    password: state.formdata.password,
  });
  const API_URL = `http://localhost:5001/user?${params.toString()}`;


  await axios.get(API_URL).then(function(response){
      if (response.data.length > 0) {
        setcookie("email",response.data[0].email)
        setcookie("password",response.data[0].password)
        if (response.data[0].role === 2) {
          navigate("/Dashboard")
        }else{
          console.log("role not matched");
        }
      }else{
        console.log("invalid user");
      }
  }).catch(function(error){
    console.log(error);
  })
 
};

  return (
    <>
      {/* <Header /> */}
      
      <Facebooklogo>
        <Formcontainer>
          <h1>facebook</h1>
          <Form>
            <form>
              <h4>Log in to Facebook</h4>
              <input
                type="email"
                placeholder="Email address or Phone number"
                name="email"
                onChange={setLoginformdata}
              />
              <input
                type="password"
                onChange={setLoginformdata}
                placeholder="Password"
                name="password"
              />
              <button type="button" onClick={HandleSubmit}>
                Login
              </button>
              <span>Forgotten account?</span>
              <Line>
                <div className="div"></div>or<div className="div"></div>
              </Line>
              <p>
                <Stylelink to="Signpage">Create New Account</Stylelink>
              </p>
            </form>
          </Form>
        </Formcontainer>
      </Facebooklogo>
    </>
  );
};

export default Login;

const Formcontainer = styled.div`
  h1 {
    text-align: center;
    color: #1877f2;
    font-size: 45px;
    padding: 0;
    font-weight: 700;
    font-family: sans-serif;
    /* padding-top: 20px; */
  }
  width: 380px;
  height: 100vh;
  /* display: flex;
        justify-content: center;
        align-items: center; */
`;
const Form = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  width: 100%;
  p {
    padding: 30px 0;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin: 8px 19px;
    width: 90%;
    height: 50px;
    /* padding-left: 10px; */
    padding: 7px 0 7px 10px;
    font-size: 17px;
    /* color: gray; */

    border: 1px solid gray;
    border-radius: 10px;
    /* opacity: 0.7; */
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    margin: 5px 20px;
    width: 90%;
    height: 48px;
    text-align: center;
    font-weight: 500;
    color: white;
    font-family: sans-serif;
    background: #1877f2;
    border: none;
    cursor: pointer;
    border-radius: 5px;

    font-size: 20px;
    &:hover {
      background: blue;
    }
  }
  span {
    text-align: center;
    color: #1877f2;
    padding-top: 10px;
    cursor: pointer;
  }
  span:hover {
    text-decoration: underline;
  }
  h4 {
    padding-top: 20px;
    text-align: center;
    /* padding: 10px 0; */
    font-size: 20px;
    font-weight: 400;
  }
  p {
    text-align: center;
    font-size: 20px;
    color: blue;
  }
`;
const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  div {
    border: 1px solid #bfbebb;
    width: 50%;
    height: 0;
  }
`;
const Facebooklogo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Stylelink = styled(Link)`
  margin-bottom: 10px;
  /* width: max-content; */
  margin: 0 auto;
  padding: 12px 16px;
  color: white;
  font-weight: 600;
  border-radius: 10px;
  background: #42b72a;
`;
