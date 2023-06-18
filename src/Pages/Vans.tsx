import { useEffect, useState } from 'react';
// import React from "react"
import { Link } from 'react-router-dom';

interface VanUi {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
}

export const Vans = () => {
  const [vans, setVans] = useState<VanUi[]>([]);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log('🚀 ~ file: Vans.tsx:28 ~ useEffect ~ err:', err);
    }

    // return () => {};
  }, []);

  const fetchData = async () => {
    const res = await fetch('/api/vans');
    const { vans: data } = await res.json();
    setVans(data);
  };

  if (!vans) return <div className="">REBDERING</div>;

  return (
    <>
      <div className="van-list-container"></div>
      <h1 className="text-2xl">Explore our van options</h1>
      <div className="van-list">
        {vans.map(van => (
          <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
              <img src={van.imageUrl} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
