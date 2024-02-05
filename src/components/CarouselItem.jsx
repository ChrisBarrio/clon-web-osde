//import React from 'react';

const CarouselItem = ({ image, title, link }) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md min-h-72 flex flex-col justify-between">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover mb-4 rounded-md"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <a href={link} className="text-blue-500 hover:underline">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
