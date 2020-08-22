import React from "react";
import defaultImg from './user.png';

interface IProps {
  imageUrl?: string
}

const CircularImage: React.FC<IProps> = ({imageUrl}) => {
  return (
    <img
      src={imageUrl !== 'default' ? imageUrl : defaultImg}
      alt=""
      className="rounded-circle w-100"
    />
  );
};

export default CircularImage;
