import React from 'react';
import '../assets/css/footer.css'

export const Footer = () => {
  return (
    <footer className="footer bg-body-tertiary">
      <div className="container-fluid text-center py-3">
        <p className="mb-0">© 2024 Pearl Store | All Rights Reserved</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms of Service</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
