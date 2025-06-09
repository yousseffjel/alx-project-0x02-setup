import {type CardProps } from "@/interfaces";
import React from "react";



const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
};

export default Card;
