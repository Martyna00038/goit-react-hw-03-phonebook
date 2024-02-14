import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './FilterStyles';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      ></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
