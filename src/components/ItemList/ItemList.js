import React from 'react';
import PropTypes from 'prop-types';
import './ItemList.css';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = (props) => (

  <div className="item-list overflow-scroll" style={{ height: "100vh" }}>
    {[...props.items].map((item) => (
      <ItemCard
        onLike={() => props.onItemLike(item)}
        onDislike={() => props.onItemDislike(item)}
        onRemove={() => props.onItemRemove(item)}
        {...item}>
      </ItemCard>
    ))}
  </div >

);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemLike: PropTypes.func,
  onItemDislike: PropTypes.func,
  onItemRemove: PropTypes.func,

};

ItemList.defaultProps = {
  items: [],
  onItemLike: () => console.log(`Liked`),
  onItemDislike: () => console.log(`Disliked`),
  onItemRemove: () => console.log(`Removed`),
};

export default ItemList;
