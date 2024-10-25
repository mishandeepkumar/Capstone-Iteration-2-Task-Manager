import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// PropTypes validation
ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ItemList;
