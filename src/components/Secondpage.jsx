import React from 'react'
import img2 from "../assets/img1.jpg";
function Secondpage() {
  return (
      <>
         <style>
           {`
             #philosophy-section {
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               padding: 4rem 1.5rem;
               gap: 2.5rem;
               background-color: white;
             }
   
             @media (min-width: 1024px) {
               #philosophy-section {
                 flex-direction: row;
                 justify-content: space-evenly;
               }
             }
   
             .illustration-container {
               max-width: 28rem;
               width: 100%;
               padding: 0 1rem;
             }
   
             .illustration-container img {
               width: 100%;
               height: auto;
               object-fit: contain;
             }
   
             .content-wrapper {
               max-width: 50rem;
               width: 100%;
               padding: 0 1rem;
             }
   
             .content-box {
               background-color: #ffefea;
               padding: 2rem 1.5rem 1.5rem;
               border-radius: 0.5rem;
               box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
               position: relative;
               text-align: center;
             }
   
             @media (min-width: 768px) {
               .content-box {
                 text-align: left;
                 padding: 3rem 2rem 2rem;
               }
             }
   
             .tag {
               position: absolute;
               top: 0;
               left: 1.5rem;
               transform: translateY(-50%);
               background-color: #f97316;
               color: white;
               font-size: 0.875rem;
               font-weight: 600;
               padding: 0.25rem 1rem;
               border-radius: 0.375rem 0.375rem 0 0;
             }
   
             .title {
               font-size: 1.75rem;
               font-weight: 700;
               line-height: 1.4;
               color: black;
               margin-bottom: 1rem;
             }
   
             @media (min-width: 768px) {
               .title {
                 font-size: 2rem;
               }
             }
   
             .highlight {
               color: #f97316;
               font-weight: 700;
             }
   
             .paragraph {
               color: #1f2937;
               margin-bottom: 1rem;
               line-height: 1.75;
               font-size: 1rem;
               font-weight: 500;
             }
           `}
         </style>
   
         <section id="philosophy-section">
           {/* Left Content */}
           <div className="content-wrapper">
             <div className="content-box">
               <span className="tag">What We Are</span>
               <h2 className="title">
                 Not a Product. Not a Platform. <span className="highlight">A Philosophy</span>
               </h2>
               <p className="paragraph">
                 Sample Project is the invisible architecture behind transformative brand cultivating ideas, people, and systems that create meaningful impact across diverse industries. From wellness to culture, from technology to aesthetics we operate at the intersection of feeling and future.
               </p>
             </div>
           </div>
   
           {/* Right Illustration */}
           <div className="illustration-container">
             <img src={img2} alt="Illustration" />
           </div>
         </section>
       </>
  )
}

export default Secondpage
