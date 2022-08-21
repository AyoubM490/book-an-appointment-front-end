import React from 'react';
import PropTypes from 'prop-types';

const SideView = (props) => {
  const { motorcycle } = props;

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

SideView.propTypes = {
  motorcycle: PropTypes.arrayOf.isRequired,
};

export default SideView;
