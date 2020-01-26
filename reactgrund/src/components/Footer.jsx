import React from 'react'

const Footer = () => {
  const fullYear = new Date().getFullYear();
  return (
    <footer>
      <p>all rights reserved &copy; {fullYear}</p>
    </footer>
  )
};


export default Footer;

