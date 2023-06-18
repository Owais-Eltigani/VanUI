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
export const Photos = () => {
  const { van }: { van: VanUi } = useOutletContext();
  return <img src={van.imageUrl} className="host-van-detail-image" />;
};
