import propTypes from "prop-types";
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div>
  <label className={css.filterTitle}>
    Find contacts by Name
    <input
      className={css.filterName}
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </label>
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
