import { Outlet, Link, NavLink, useLoaderData } from 'react-router-dom';
import { VanUi } from '../utils/types';
import { fetchHostVans } from '../utils/APIs';
import { auth } from '../utils/auth';

interface params {
  id: string;
}

export const loader = async ({ params }: { params: params }) => {
  await auth();
  return fetchHostVans(params.id);
};

export const HostVanDetailsLayout = () => {
  // const { id } = useParams();
  // const [van, setVan] = useState<VanUi>();

  const van: VanUi = useLoaderData()[0];

  const styleActive = {
    fontWeight: 'bold',
    color: '#161616',
    textDecoration: 'underline',
  };

  // const fetchVan = async (id: string) => {
  //   const res = await fetch(`/api/host/vans/${id}`);
  //   const { vans } = await res.json();
  //   setVan(vans[0]);
  // };

  // useEffect(() => {
  //   try {
  //     fetchVan(id);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // return () => {};
  // }, [id]);

  if (!van) return <div>Loading...</div>;

  return (
    <>
      <section>
        <Link to="./.." className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={van.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${van.type}`}>{van.type}</i>
              <h3>{van.name}</h3>
              <h4>${van.price}/day</h4>
            </div>
          </div>
        </div>
      </section>{' '}
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : {})}
          end
          to={'.'}>
          Details
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? styleActive : {})}
          to="pricing">
          Pricing
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? styleActive : {})}
          to="photos">
          Photos
        </NavLink>
      </nav>{' '}
      <Outlet context={{ van }} />
    </>
  );
};
