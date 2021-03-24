import React from 'react';
import AuthNav from '../authNav/AuthNav';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';

const AppBar = ({ isAuthenticated }) => {
  return (
    <div>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
