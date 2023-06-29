import { Link, useLocation, useLoaderData } from 'react-router-dom';
import { VanUi } from '../utils/types';
import { fetchVans /* _fireBase_fetch_van */ } from '../utils/APIs';

interface params {
  id: string;
}

export const loader = ({ params }: { params: params }) => {
  return fetchVans(params.id);
  // return _fireBase_fetch_van(params.id);
};

export const Van = () => {
  // const { id } = useParams();
  // const [van, setVan] = useState<VanUi>();
  const van: VanUi = useLoaderData();
  const location = useLocation();

  // const fetchVan = async (id: string) => {
  //   const res = await fetch(`/api/vans/${id}`);
  //   //
  //   const { vans } = await res.json();
  //   setVan(vans);
  // };

  // useEffect(() => {
  //   try {
  //     fetchVan(id);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // return () => {};
  // }, [id]);

  return (
    <div className="van-detail-container">
      <Link to={`./..?${location.state.sp}`} className="back-button">
        &larr;{' '}
        <span>
          Back to {location.state.type ? location.state.type : 'all'} vans
        </span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
