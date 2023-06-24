import { Link, useLoaderData } from 'react-router-dom';
import { VanUi } from '../utils/types';
import { fetchHostVans } from '../utils/APIs';
import { auth } from '../utils/auth';

export const loader = async () => {
  await auth();
  return fetchHostVans();
};

export const VansList = () => {
  // const [vans, setVans] = useState<VanUi[]>([]);
  const vans: VanUi[] = useLoaderData();

  // useEffect(() => {
  //   try {
  //     fetchData();
  //   } catch (err) {
  //     console.log('🚀 ~ file: Vans.tsx:28 ~ useEffect ~ err:', err);
  //   }

  //   // return () => {};
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch('/api/host/vans');
  //   const { vans: data } = await res.json();
  //   setVans(data);
  // };

  const hostVansEls = vans.map(van => (
    <Link
      to={`/host/vansList/${van.id}`}
      key={van.id}
      className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title text-4xl p-5">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};
