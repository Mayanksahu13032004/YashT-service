import React from 'react';
import img5 from '../assets/img5.jpg'
export default function Footer() {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #1A0B2E;
            color: white;
            padding: 2.5rem 1.5rem;
            position: relative;
            overflow: hidden;
          }

          @media (min-width: 768px) {
            .footer {
              padding: 2.5rem 5rem;
            }
          }

          .footer-bg {
            position: absolute;
            inset: 0;
            background-image: url('/pattern.png');
            opacity: 0.2;
            background-size: cover;
            background-position: center;
            z-index: 0;
          }

          .footer-content {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
            justify-content: space-between;
          }

          @media (min-width: 768px) {
            .footer-content {
              flex-direction: row;
              align-items: center;
            }
          }

          .footer-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 600;
            font-size: 1.125rem;
          }

          .footer-logo-circle {
            width: 1.50rem;
            height: 1.50rem;
            font-weight: 600;
            font-size: 1.125rem;
            border-radius: 9999px;
            background-color: #f97316;

          }

          .footer-nav {
            background-color: #3b2c5a;
            border-radius: 0.375rem;
            padding: 0.5rem 1.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            // justify-content: center;
            // align-items: center;
            font-size: 0.875rem;
            font-weight: 500;
            color: #f3f4f6;
            margin-right:-40rem;
            margin-bottom:4rem;
          }

          .footer-nav a {
            color: inherit;
            text-decoration: none;
            transition: color 0.3s ease;
            
          }

          .footer-nav a:hover {
            color: #fb923c;
          }

          .footer-copy {
            font-size: 0.875rem;
            color: #d1d5db;
            margin-top:2rem;
            font-weight:bold;
          }

          .footer-terms {
            font-size: 0.875rem;
            color: #d1d5db;
            display: flex;
            gap: 0.75rem;
            align-items: center;
            margin-top:3rem;
            
            font-weight:bold;
          }

          .footer-terms a {
            color: inherit;
            text-decoration: none;

          }

          .footer-terms a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <footer className="footer" style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '200px', // you can change the height as per your need
                width: '100%',
              }}>
        {/* Background grid pattern */}
        <div className="footer-bg" />

        <div className="footer-content">
          {/* Left: Logo and copyright */}
          <div>
            <div className="footer-logo">
              <div className="footer-logo-circle" />
              <span>Sample Project</span>
            </div>
            <p className="footer-copy">
              © 2025 Sample Project. All rights reserved
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="footer-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Our Brands</a>
            <a href="#">What We Do</a>
            <a href="#">Team</a>
            <a href="#">Careers</a>
          </div>

          {/* Right: Terms */}
          <div className="footer-terms">
            <a href="#">Term of Use</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
