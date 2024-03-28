import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright &copy; {year}</p>
      </footer>
    </div>
  );
};

export default Footer;

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
