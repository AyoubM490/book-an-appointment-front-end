import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMotorcycle } from '../../redux/motorcycles/motorcycles';

const AddMotorcycle = () => {
  const getData = () => ({
    model: '',
    deposit: 0,
    duration_months: 0,
    description: '',
    image: '',
  });
  const [formData, setFormData] = useState(getData);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const modelHandle = (e) => {
    setFormData({ ...formData, model: e.target.value });
  };

  const depositHandle = (e) => {
    setFormData({ ...formData, deposit: e.target.value });
  };

  const durationHandle = (e) => {
    setFormData({ ...formData, duration_months: e.target.value });
  };

  const descriptionHandle = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const imageHandle = (e) => {
    setFormData({ ...formData, image: e.target.value });
  };

  const submitHandle = () => {
    dispatch(createMotorcycle(formData, currentUser.currentUser.id));
  };

  return (
    <div className="form">
      <h2>Add your Motor</h2>

      <form onSubmit={submitHandle} className="form">
        <label className="form-label" htmlFor="model">
          Model
          <input
            type="text"
            name="model"
            className="form-control"
            value={formData.model}
            onChange={modelHandle}
            placeholder="Your model.."
            id="model"
            required
          />
        </label>
        <label className="form-label mt-3" htmlFor="deposit">
          Deposit
          <input
            type="number"
            name="deposit"
            className="form-control"
            value={formData.deposit}
            onChange={depositHandle}
            placeholder="Your deposit"
            id="deposit"
            required
          />
        </label>
        <label className="form-label mt-3" htmlFor="duration">
          Duration
          <input
            type="number"
            name="duration_months"
            className="form-control"
            value={formData.duration_months}
            onChange={durationHandle}
            placeholder="Your duration"
            id="duration"
            required
          />
        </label>
        <label className="form-label mt-3" htmlFor="description">
          Description
          <textarea
            name="description"
            value={formData.description}
            className="form-control"
            onChange={descriptionHandle}
            placeholder="Your description.."
            id="description"
            required
          />
        </label>
        <label className="form-label" htmlFor="image">
          Image
          <input type="file" id="image" name="image" accept="image/png, image/jpeg" className="form-control" onChange={imageHandle} />
        </label>
        <label className="form-label" htmlFor="submit">
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Add to the Database"
            id="submit"
          />
        </label>
      </form>

    </div>
  );
};

export default AddMotorcycle;
