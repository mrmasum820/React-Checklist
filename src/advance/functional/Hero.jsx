import React from "react";

const Hero = ({ heroName }) => {
  if (heroName === "Joker") {
    throw new Error("This is not a hero");
  }
  return (
    <div>
      <p>{heroName}</p>
    </div>
  );
};

export default Hero;

/**
 * <ErrorBoundary>
        <Hero heroName={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Badman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Joker"} />
      </ErrorBoundary>
 */
