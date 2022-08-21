import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleMotorcycle } from '../../../redux/motorcycles/motorcycles';
import SideView from './SideView';

const DetailsPage = () => {
  const motorcycle = useSelector((state) => state.motorcycles);
  const { id } = useParams;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleMotorcycle(id));
  }, [id]);

  return (
    <div>
      <section>
        <img src={motorcycle.image} alt="Motorcycle" />
      </section>
      <section>
        <SideView motorcycle={motorcycle} />
      </section>
    </div>
  );
};

export default DetailsPage;
