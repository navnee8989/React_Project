import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Manubar = styled.div`
  width: 20%;
  /* margin: 0 auto; */
  ol {
    display: block;
  }
  li {
    margin: 30px;
  }
`;
const View = styled.div`
    width:100%;
`;

const PageMenu = () => {
  return (
    <>
    <div className="Container d-flex justify-between items-center">
      <Manubar>
        <ol>
          <li>
            <Link to="User">User</Link>
          </li>
          <li>
            <Link to="Admin">Admin</Link>
          </li>
          <li>
            <Link to="Login">Login Page</Link>
          </li>
        </ol>
      </Manubar>
      <View>

      <Outlet />
      </View>
      </div>
    </>
  );
};

export default PageMenu;
