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
      { motorcycle
        ? (
          <>
            <section className="details-image p-3">
              <img src={motorcycle.image} alt="Motorcycle" />
            </section>
            <section className="details-sideview d-flex h-100">
              <SideView motorcycle={motorcycle} />
            </section>
          </>
        )
        : <div>Invalid ID</div>}
    </div>

  );
};

export default DetailsPage;
