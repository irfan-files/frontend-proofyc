import React from "react";
import "./ImageSection.css"; // Import the custom CSS for animation

const ImageSection = () => {
  return (
    <section className="relative z-10 bg-white rounded-xl">
      <div className="absolute bg-gray-900 inset-0 bg-gray-91 h-1/2"></div>
      <div className="absolute inset-0 bg-gray-100 h-1/2 top-1/2"></div>
      <div className="relative max-w-4xl mx-auto p-12">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc3c661e69968e9e249a73f51fd1c6c94b5df693c006a176601d25f037156b72?placeholderIfAbsent=true&apiKey=c73c9da61887485d94ad6c5d97385c22"
          alt="Person speaking into a microphone"
          className="w-full rounded-lg mb-8 floating-image"
        />
      </div>
    </section>
  );
};

export default ImageSection;
