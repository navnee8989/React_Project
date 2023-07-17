import { React, useState } from "react";
import styled from "styled-components";
import CustomHook from "./Commancomponant/Custom/CustomHook";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
// import Header from "./Commancomponant/Header";
import axios from "axios";

const Login = () => {
  const [state, setstate] = useState({ formdata: "" });
  const { handleChange, error, inp } = CustomHook({ role: 2 });
  const navigate = useNavigate();
  const [Data, setData] = useState("");
  const [cookie, setcookie] = useCookies([]);

  const setLoginformdata = (event) => {
    setstate((koibhi) => ({
      formdata: { ...koibhi.formdata, [event.target.name]: event.target.value },
    }));
  };
  // console.log(state);
  const HandleSubmit = async (e) => {
    e.preventDefault();

    // using Fatch API

    // try {
    //   const response = await fetch(
    //     `http://localhost:5001/user?email=${state.formdata.email}&password=${state.formdata.password}`
    //   );
    //   if (response.ok) {
    //     console.log("done");
    //     setData(response);
    //     const res = await response.json();
    //     // console.log(res[0].email);
    //     setData(res);
    //     if (res.length > 0) {
    //       // console.log(Data.email);
    //       // store the Cookie
    //       setcookie("email", res[0].email);
    //       setcookie("password", res[0].password);
    //       // store localStorage
    //       localStorage.setItem("email", res[0].email);
    //       localStorage.setItem("password", res[0].password);
    //       // Store the sessionStorage
    //       // sessionStorage("email",res[0].email)
    //       // sessionStorage("password",res[0].password)
    //       // setcookie(Data.email)
    //       // navigate("./Home")
    //       console.log(res[0].email);
    //       // setcookie(Data.password)
    //       if (res.role === 1) {
    //         navigate("/Dashboard");
    //         console.log("dashboard");
    //       } else {
    //         navigate("/");
    //         console.log("Home Page");
    //       }
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

      
      await axios.get(`http://localhost:5001/user?email=${state.formdata.email}&password=${state.formdata.password}`)
      .then(function(response) {
        // setData(response.data);
// console.log(response.data[0].role);
console.log("done");
          // console.log(response.data[0].role);
          // console.log(response.data[0]./password);
          // console.log(response.data[1]);
        if (response.data.length > 0) {
          // document.cookie = `id=${response.data[0].id}`;
          // document.cookie = `email=${response.data[0].email}`;
          // document.cookie = `password=${response.data[0].password}`;

          setcookie("email",response.data[0].email)
          setcookie("password",response.data[0].password)
          if (response.data[0].role === 1) {
            navigate("/Dashboard");
            console.log("Dashboard");
          } else {
            navigate("/Home");
            console.log("HOme PAge");
          }
        } else {
          console.log("Invalid user");
        }
      })
      .catch(function(error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
          console.log("Network error");
        } else {
          console.log(error);
        }
      });

    //     axios.get(`http://localhost:5001/user?email=${state.formdata.email}&password=${state.formdata.password}`).then(function(respose){
    //       // console.log(respose);
    //       console.log(respose.data[0]);
    //     }).catch(function(error){
    //       console.log(error);
    //     })
    // };
    // console.lo/g(Data);
    // const MainData = Data.data
    // console.log(MainData);
    // const value = state.formdata.email;
    // const Obejct=JSON.stringify(Data)
    // console.log(Obejct);
    // console.log(state.formdata.email);
    // console.log(state.formdata.password);
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
              <button type="submit" onClick={HandleSubmit}>
                Login{" "}
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
