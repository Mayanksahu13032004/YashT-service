import React from "react";

import gun from "../assets/gun.jpg"
import '../style/vision.css'

export default function VisionSection() {
  return (
    <>
      <style>
        {`
          .vision-section {
            position: relative;
            background-color: #f4edfd;
            padding: 5rem 1.5rem;
            overflow: hidden;
          }

          @media (min-width: 1024px) {
            .vision-section {
              padding: 5rem;
            }
          }

        .vision-label {
  position: absolute;
  top: 0; /* Or top: 1rem; if you want spacing */
  left: 50%;
  transform: translateX(-50%); /* Only horizontal centering */
  background-color: #3f2d87;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  
  padding: 0.25rem 1rem;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2147483647;
}


          .vision-container {
            display: flex;
            flex-direction: column;
            
            gap: 2.5rem;
            align-items: center;
            justify-content: space-between;
            position: relative;
            z-index: 10;
          }

          @media (min-width: 1024px) {
            .vision-container {
              flex-direction: row;
            }
          }

          .vision-image {
            max-width: 20rem;
            width: 100%;
          }

          .vision-content {
            text-align: center;
            max-width: 42rem;
            width: 100%;
          }

        .vision-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #1f2937;
  line-height: 1.4;
  white-space: nowrap; /* ✅ This prevents line break */
}


        @media (max-width: 768px) {
  .vision-title {
    white-space: normal;
    font-size: 1.5rem;
  }
}


          .vision-text {
            color: #4b5563; /* gray-700 */
            margin-bottom: 0.75rem;
            font-weight: bold;
          }

          .vision-divider {
            border-top: 2px dotted #60a5fa; /* blue-400 */
            width: 50%;
            margin: 1.5rem auto;
            position: relative;
          }

          .vision-divider-icon {
            position: absolute;
            top: -0.75rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: white;
            padding: 0 0.5rem;
            color: #60a5fa;
            font-weight: bold;
          }

          .vision-button {
            background-color: #f97316; /* orange-500 */
            color: black;
            font-weight: 700;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-size: 1rem;
            transition: background-color 0.3s ease;
            border: none;
            cursor: pointer;
          }

          .vision-button:hover {
            background-color: #ea580c; /* orange-600 */
          }
        `}
      </style>

      <section className="vision-section hello"   style={{
          backgroundImage: `url(${gun})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '470px', // you can change the height as per your need
          width: '100%',
        }}>
     <div
  className="vision-label"
 
>
  The Vision
</div>


        <div className="vision-container">
          {/* Left Image */}
          <div className="vision-image">
            {/* Uncomment if using local images */}
          
          </div>

          {/* Center Content */}
          <div className="vision-content">
            <h2 className="vision-title">
              Our Vision Is Not to Own the Future. It’s to Inspire It
            </h2>
            <p className="vision-text">
              Only deep belief in ideas that matter and experiences that move
              people.
            </p>
            <p className="vision-text">
              In a world driven by urgency, we build with intention
            </p>

          

            {/* CTA Button */}
            <button className="vision-button">Learn More About Us</button>
          </div>

          {/* Right Image */}
          <div className="vision-image">
            {/* Uncomment if using local images */} */
             {/* <img src={MountainImage} alt="Mountain Illustration" className="w-full object-contain" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
