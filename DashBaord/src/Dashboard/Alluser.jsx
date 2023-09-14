import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminAllusers = () => {
  const [users, setUsers] = useState([]); // State variable for users
  const [errorMsg, setErrorMsg] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteuser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5001/user/${userId}`);
      setUsers(users.filter(user => user.id !== userId)); // Remove the deleted user from the list
    } catch (error) {
      console.log("Delete error:", error);
    }
  }

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/user`);
      setUsers(response.data);
      setLoader(true);
    } catch (error) {
      setErrorMsg(true);
      console.log("Error:", error);
    }
  }

  return (
    <div className="container my-2 mb-2">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-10">
              <h2>All Users</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/admin/">Dashboard</Link></li>
                  <li className="breadcrumb-item active"><small>All Users</small></li>
                </ol>
              </nav>
            </div>
            <div className="col text-end">
              <Link to="/admin/addnewuser" className='btn btn-primary'>Add New</Link>
            </div>
          </div>
          <div className="card my-2">
            {errorMsg ? <p>No data found</p> : (
              <table className='table table-bordered table-stripped'>
                <thead className='bg-dark text-light'>
                  <tr>
                    <th>Sr No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loader ? (
                    users.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <Link to={`/Dashboard/Edit/${user.id}`} className='btn btn-sm btn-info'>
                            <i className="fa fa-pencil" aria-hidden="true"></i> Edit
                          </Link>
                          &nbsp;
                          <button
                            className='btn btn-sm btn-danger'
                            onClick={() => deleteuser(user.id)}
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i> Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">Loading....</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllusers;
