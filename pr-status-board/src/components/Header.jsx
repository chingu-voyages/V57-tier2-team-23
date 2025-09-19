import React from 'react';

const Header = () => {
// THIS COMPONENT IS NOT IN USE CURRENTLY :D 

    const handleHomeRedirect = () => {
        window.location.href = '/';
    }

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

  return (
    <div className='header'>
      <h1 className='app-name' onClick={handleHomeRedirect}>App Name</h1>
      <h2>{formatDate}</h2>
    </div>
  );
};

export default Header;