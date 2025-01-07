import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import '../../../assets/css/authLayout.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Error en el registro');
      }

      const data = await response.json();
      console.log('Usuario registrado:', data);
      // Redirigir al usuario o iniciar sesión automáticamente
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column justify-content-between align-items-center">
      <div className="row w-100 flex-grow-1">
        {/* Sección de bienvenida */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-center bg-light p-4">
          <h2 className="mb-4">Welcome to Pearl Store!</h2>
          <img
            src={logo}
            alt="Welcome Illustration"
            className="img-fluid img-custom"
            style={{ height: '65vh', width: '100%', objectFit: 'cover' }}
          />
          <p className="text-center mt-3">
            We are glad to have you here. Please sign up to continue.
          </p>
        </div>

        {/* Sección del formulario */}
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="text-center mb-4">Sign Up</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control form-control-lg form-control-custom"
                  id="inputEmail"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control form-control-lg form-control-custom"
                  id="inputPassword"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control form-control-lg form-control-custom"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-custom"
                  id="inputAddress"
                  placeholder="Enter your address"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-custom"
                  id="inputCity"
                  placeholder="City"
                />
              </div>
              <div className="d-grid col-12">
                <button type="submit" className="btn btn-custom btn-sm-custom">
                  Sign Up
                </button>
              </div>
              <div className="text-center mt-3 col-12">
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Pie de Página */}
      <footer className="text-center mt-auto p-3">
        <p className="mb-0">© {new Date().getFullYear()} Pearl Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
