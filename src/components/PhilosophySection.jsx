import React from "react";
import img2 from "../assets/img2.jpg";

export default function PhilosophySection() {
  return (
    <>
      <style>
        {`
          #philosophy-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2.5rem;
            padding: 4rem 1.5rem;
            background-color: white;
          }

          @media (min-width: 1024px) {
            #philosophy-section {
              flex-direction: row;
              justify-content: space-evenly;
            }
          }

          .illustration-container {
            border-radius: 0.375rem;
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
            position: relative;
            max-width: 50rem;
            width: 100%;
          }

          .content-box {
            background-color: #ffefea;
            padding: 2.5rem 1.5rem 1.5rem; /* Extra top padding to make room for the tag */
            border-radius: 0.375rem;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
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
            left: 1rem;
            transform: translateY(-50%);
            background-color: #f97316;
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            padding: 0.25rem 1rem;
            border-radius: 0.375rem 0.375rem 0 0;
            z-index: 10;
          }

          .title {
            font-size: 1.6rem;
            font-weight: bold;
            margin-bottom: 1rem;
            line-height: 1.4;
            color: black;
          }

          @media (min-width: 768px) {
            .title {
              font-size: 2rem;
            }
          }

          .title .highlight {
            color: #f97316;
          }

          .paragraph {
            color: #1f2937;
            margin-bottom: 1rem;
            line-height: 1.75;
            font-size: 1rem;
            font-weight: bold;
          }

          .italic-highlight {
            color: #ea580c;
            font-style: italic;
            font-weight: 600;
          }
        `}
      </style>

      <section id="philosophy-section">
        {/* Left Image */}
        <div className="illustration-container">
          <img src={img2} alt="Philosophy Visual" />
        </div>

        {/* Right Content */}
        <div className="content-wrapper">
          <span className="tag">The Philosophy</span>
          <div className="content-box">
            <h2 className="title">
              What If Business Could <span className="highlight">Feel Like Art?</span>
            </h2>
            <p className="paragraph">
              At Sample Project, we believe brands can be portals not just to profit, but to purpose,
              transformation, and collective uplift. We obsess over craft, intuition, resonance, and
              cultural timing.
            </p>
            <p className="paragraph">
              Every brand we build begins with a single question: <br />
              <span className="italic-highlight">
                Does this make the world feel more alive?
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
