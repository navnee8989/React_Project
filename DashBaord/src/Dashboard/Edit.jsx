import React, { useEffect, useState } from 'react';
import CustomHook from '../Commancomponant/Custom/CustomHook';
import { useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';

const Edit = () => {
  const { id } = useParams(); // Use useParams to get the 'id' from the URL
  const [state, setState] = useState({ username: "", password: "", email: "" });
  const { handleChange, inp, updatedData } = CustomHook(state);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get(`http://localhost:5001/user?id=${id}`);
      const userData = response.data[0];
      updatedData(userData); // Update the data using updatedData
      setLoader(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleClick() {
    console.log("called btn click", inp);
    try {
      await axios.put(`http://localhost:5001/user/${id}`, inp);
      setLoader(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="text-center font-mono mb-10">Update Email Password Here</h1>
      <div className="div d-flex justify-center items-center h-full">
        <form className='w-60 '>
          <div className="form-group">
            <label htmlFor="username">Enter username</label>
            <input
              type="text"
              className="w-full h-10 px-3 py-2 border rounded-lg text-center"
              id="username"
              placeholder="Enter username"
              onChange={handleChange}
              value={state.username} // Remove comments and use state
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="w-full h-10 px-3 py-2 border rounded-lg text-center"
              id="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={state.email} // Remove comments and use state
            />
          </div>
          <div className="form-group pb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full h-10 px-3 py-2 border rounded-lg text-center"
              id="password"
              placeholder="Password"
              value={state.password} // Remove comments and use state
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-center items-center">
            <button type="button" className="btn btn-danger" onClick={handleClick}>Update</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Edit;
