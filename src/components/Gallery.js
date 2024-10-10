import React from "react";

const Gallery = () => {
  return (
    <div className="w-full h-96 bg-gray-900 flex justify-center items-center">
      <div className="grid grid-cols-5 gap-4">
        <img
          className="h-80"
          src="https://via.placeholder.com/268x340"
          alt="Gallery Image"
        />
        <img
          className="h-80"
          src="https://via.placeholder.com/268x340"
          alt="Gallery Image"
        />
        <img
          className="h-80"
          src="https://via.placeholder.com/268x340"
          alt="Gallery Image"
        />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;
