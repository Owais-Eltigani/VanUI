import React from 'react';
import { useOutletContext } from 'react-router-dom';

interface VanUi {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}
export const Pricing = () => {
  const { van }: { van: VanUi } = useOutletContext();

  return (
    <h3 className="host-van-price">
      ${van.price}
      <span>/day</span>
    </h3>
  );
};
