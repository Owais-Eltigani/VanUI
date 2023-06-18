import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface VanUi {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export const Van = () => {
  const { id } = useParams();
  const [van, setVan] = useState<VanUi>();

  const fetchVan = async (id: string) => {
    const res = await fetch(`/api/vans/${id}`);
    const { vans } = await res.json();
    setVan(vans);
  };

  useEffect(() => {
    try {
      fetchVan(id);
    } catch (err) {
      console.log(err);
    }

    // return () => {};
  }, [id]);

  return (
    <div className="van-detail-container">
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
