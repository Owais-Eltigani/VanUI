import { useOutletContext } from 'react-router-dom';
import { VanUi } from '../utils/types';

// export const loader = () => {
//   return fetchHostVans();
// };

export const VanByID = () => {
  const { van }: { van: VanUi } = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4 className="p-2">
        Name: <span>{van.name}</span>
      </h4>
      <h4 className="p-2">
        Category: <span>{van.type}</span>
      </h4>
      <h4 className="p-2">
        Description: <span>{van.description}</span>
      </h4>
      <h4 className="p-2">
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
};
