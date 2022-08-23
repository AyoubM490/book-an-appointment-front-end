import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleMotorcycle } from '../../redux/motorcycles/motorcycles';
import SideView from './SideView';

const DetailsPage = () => {
  const motorcycle = useSelector((state) => state.motorcycles);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleMotorcycle(id));
  }, [id]);

  return (
    <div className="p-3 w-100 d-flex">
      {motorcycle && Object.keys(motorcycle).length > 0
        ? (
          <>
            <section className=" d-flex align-items-center details-image px-3">
              <img src={motorcycle.image} alt="Motorcycle" className="w-100" />
            </section>
            <section className="details-sideview d-flex h-100">
              <SideView motorcycle={motorcycle} />
            </section>
          </>
        )
        : <h2>Invalid Motorcycle ID</h2>}
    </div>

  );
};

export default DetailsPage;
