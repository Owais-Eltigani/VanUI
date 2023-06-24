import { useOutletContext } from 'react-router-dom';
import { VanUi } from '../utils/types';

export const Pricing = () => {
  const { van }: { van: VanUi } = useOutletContext();

  return (
    <h3 className="host-van-price">
      ${van.price}
      <span>/day</span>
    </h3>
  );
};
