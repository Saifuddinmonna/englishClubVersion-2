import React from 'react';

function Footer() {
  return (
    <footer className="container rounded-4 bg-dark mt-5 py-5 text-center text-white">
      <div className="container footer">
        <h2 className="pb-3">English Club</h2>
        <p className="pb">Gohailkandi, Jamtola,Bylane-1 ,Mymensingh Sadar, Mymensingh.</p>
        <p className="pb-3 fst-italic">Privacy Policy | Terms of use</p>
        <p>Contact Us: <a className="text-decoration-none text-white" href="tel:+8801623361191">+8801623361191</a></p>
        <p className="mt-4 fs-4 text-white">
          <a href="https://twitter.com/" className="text-white"><i className="fa-brands fa-twitter p-2"></i></a>
          <a href="https://www.linkedin.com/" className="text-white"><i className="fa-brands fa-linkedin p-2"></i></a>
          <a href="https://www.facebook.com/" className="text-white"><i className="fa-brands fa-facebook p-2"></i></a>
        </p>
        <p className="fst-italic">
          Copyright <i className="fa-regular fa-copyright"></i> 2024 @ 
          <a className="text-decoration-none text-danger fst-italic ms-1" href="https://saifuddinmonna.github.io/profile/">
            Saifuddin Ahammed Monna
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 