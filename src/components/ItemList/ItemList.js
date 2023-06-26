import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = (props) => (

  <div className="item-list overflow-scroll" style={{ height: "92vh" }}>
    {[...props.items].map((item) => (
      <ItemCard
        onLike={() => props.positiveAction(item)}
        onDislike={() => props.negativeAction(item)}
        {...item}></ItemCard>
    ))}
  </div >

);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  positiveAction: PropTypes.func,
  negativeAction: PropTypes.func,
};

ItemList.defaultProps = {
  items: [],
  positiveAction: () => console.log("positive action"),
  negativeAction: () => console.log("negative action"),
};

export default ItemList;
