import {
  Link,
  useLoaderData,
  useSearchParams,
  defer,
  Await,
} from 'react-router-dom';
import { VanUi } from '../utils/types';
import {
  fetchVans /* fetchvans */ /* _fireBase_fetch_vans */,
} from '../utils/APIs';
import React from 'react';

export const loader = async () => {
  // return fetchVans();
  // return await fetchVans();
  // const vanslist = fetchVans();
  return defer({ vanslist: fetchVans() });
  // return defer({ vanslist: _fireBase_fetch_vans() });
};

export const Vans = () => {
  // const [vans, setVans] = useState<VanUi[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  // const vans: VanUi[] = useLoaderData();
  const data = useLoaderData();

  const typeFilter = searchParams.get('type');

  // const vansArr = typeFilter
  //   ? vans.filter(van => van.type === typeFilter)
  //   : vans;

  // useEffect(() => {
  //   try {
  //     fetchData();
  //   } catch (err) {
  //     console.log('🚀 ~ file: Vans.tsx:28 ~ useEffect ~ err:', err);
  //   }

  //   // return () => {};
  // }, []);

  // const fetchData = async () => {
  //   const res = await fetch('/api/vans');
  //   const { vans: data } = await res.json();
  //   setVans(data);
  // };

  // if (!vans) return <div className="">RENDERING</div>;

  return (
    <>
      <div className="van-list-container"></div>
      <h1 className="text-2xl p-3">Explore our van options</h1>
      <React.Suspense fallback={<h1 className="text-2xl p-4">LOADING...</h1>}>
        <Await resolve={data?.vanslist}>
          {(vanslist: VanUi[]) => {
            const vansArr = typeFilter
              ? vanslist.filter(van => van.type === typeFilter)
              : vanslist;

            return (
              <>
                <div className="van-list-filter-buttons space-x-3">
                  <button
                    className={`${
                      typeFilter === 'simple' ? 'selected' : ''
                    } van-type simple`}
                    onClick={() => setSearchParams({ type: 'simple' })}>
                    Simple
                  </button>

                  <button
                    className={`${
                      typeFilter === 'luxury' ? 'selected' : ''
                    } van-type luxury`}
                    onClick={() =>
                      setSearchParams({ type: 'luxury', tone: 'fun' })
                    }>
                    Luxury
                  </button>

                  <button
                    className={`${
                      typeFilter === 'rugged' ? 'selected' : ''
                    } van-type rugged`}
                    onClick={() => setSearchParams({ type: 'rugged' })}>
                    Rugged
                  </button>

                  {typeFilter ? (
                    <button
                      className={`${
                        typeFilter ? 'selected' : ''
                      } van-type clear-filters`}
                      onClick={() => setSearchParams({})}>
                      Clear filter
                    </button>
                  ) : null}
                </div>
                <div className="van-list">
                  {vansArr.map(van => (
                    <div key={van.id} className="van-tile">
                      <Link
                        to={`/vans/${van.id}`}
                        state={{
                          sp: searchParams.toString(),
                          type: typeFilter,
                        }}>
                        <img src={van.imageUrl} />
                        <div className="van-info">
                          <h3>{van.name}</h3>
                          <p>
                            ${van.price}
                            <span>/day</span>
                          </p>
                        </div>
                        <i className={`van-type ${van.type} selected`}>
                          {van.type}
                        </i>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            );
          }}
        </Await>
      </React.Suspense>
      {/*       <div className="van-list-filter-buttons space-x-3">
        <button
          className={`${
            typeFilter === 'simple' ? 'selected' : ''
          } van-type simple`}
          onClick={() => setSearchParams({ type: 'simple' })}>
          Simple
        </button>

        <button
          className={`${
            typeFilter === 'luxury' ? 'selected' : ''
          } van-type luxury`}
          onClick={() => setSearchParams({ type: 'luxury', tone: 'fun' })}>
          Luxury
        </button>

        <button
          className={`${
            typeFilter === 'rugged' ? 'selected' : ''
          } van-type rugged`}
          onClick={() => setSearchParams({ type: 'rugged' })}>
          Rugged
        </button>

        {typeFilter ? (
          <button
            className={`${typeFilter ? 'selected' : ''} van-type clear-filters`}
            onClick={() => setSearchParams({})}>
            Clear filter
          </button>
        ) : null}
      </div>

      <div className="van-list">
        {vansArr.map(van => (
          <div key={van.id} className="van-tile">
            <Link
              to={`/vans/${van.id}`}
              state={{ sp: searchParams.toString(), type: typeFilter }}>
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
 */}{' '}
    </>
  );
};
