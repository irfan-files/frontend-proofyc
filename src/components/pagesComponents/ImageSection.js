import React from "react";
import "./ImageSection.css"; // Import the custom CSS for animation

const ImageSection = () => {
  return (
    <section className="relative z-10 bg-white rounded-xl">
      <div className="absolute inset-0 bg-gray-91 h-1/2"></div>
      <div className="absolute inset-0 bg-gray-100 h-1/2 top-1/2"></div>
      <div className="relative max-w-4xl mx-auto p-12">
        <img
          src="https://placehold.co/1200x600"
          alt="Person speaking into a microphone"
          className="w-full rounded-lg mb-8 floating-image"
        />
      </div>
    </section>
  );
};

export default ImageSection;
