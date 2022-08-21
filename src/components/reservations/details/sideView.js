import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchSingleMotorcycle } from '../../../redux/motorcycles/motorcycles';

const sideView = () => {
  const { id } = useParams;
  const motorcycle = useSelector((state) => state.motorcycles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleMotorcycle(id));
  }, [id]);

  return (
    <div>
      <h2>{motorcycle.model}</h2>
      <p>
        $
        {motorcycle.deposit}
        {' '}
        deposit to be made
      </p>
      <table className="table table-striped">
        <tbody className="table-body">
          <tr>
            <td>Finance fee</td>
            <td>Service fee</td>
            <td>Total amount payable</td>
          </tr>
        </tbody>
      </table>
      <button type="button">Reserve</button>
    </div>
  );
};

sideView.propTypes = {
  reservation: PropTypes.arrayOf.isRequired,
};

export default sideView;
