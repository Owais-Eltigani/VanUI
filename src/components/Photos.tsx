import { useOutletContext } from 'react-router-dom';
import { VanUi } from '../utils/types';

export const Photos = () => {
  const { van }: { van: VanUi } = useOutletContext();
  return <img src={van.imageUrl} className="host-van-detail-image" />;
};
