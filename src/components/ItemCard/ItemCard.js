import React from 'react';
import './ItemCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { HandThumbsUpFill, HandThumbsDownFill, XLg } from 'react-bootstrap-icons';
import Button from '../Button/Button';

const ItemCard = (props) => {

  let likeButton = <Button className="btn btn-success m-auto " text={<HandThumbsUpFill />} onClick={() => props.onLike()} />;
  let dislikeButton = <Button className="btn btn-danger m-auto " text={<HandThumbsDownFill />} onClick={() => props.onDislike()} />;
  let deleteButton = <Button className="btn btn-warning m-auto " text={<XLg />} onClick={() => props.onRemove()} />;

  let buttons =
    <React.Fragment>
      {likeButton}{dislikeButton}
    </React.Fragment>
  if (props.status !== 0) {
    buttons = deleteButton

  }


  let bg = 'bg-white'
  if (props.status === 1)
    bg = 'bg-success-subtle'
  if (props.status === -1)
    bg = 'bg-danger-subtle'



  return (
    <div className={`card ${bg} d-flex`} >
      <div div className="card-body d-flex py-0 ps-0">
        <img src={props.imageURL} alt="Card" className="card-img-left ps-0 col-4 col-sm-3 ms-0" />
        <div className="row col ms-1 mt-2">
          <p class='fs-6'>{props.title}<br /><span class='fs-0'>({props.year})</span></p>
          <p className='m-auto me-1 align-bottom d-flex align-items-bottom flex-wrap '>
            {props.genres.map((item) => (
              <span className="badge bg-secondary p-1 m-1 rounded-pill align-bottom ">{item}</span>
            ))}
          </p>
        </div>
        <div className="card-actions d-flex flex-column">
          {buttons}
        </div>
      </div>
    </div >
  )
};

ItemCard.propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  genres: PropTypes.array,
  year: PropTypes.number,
  status: PropTypes.number,
}

ItemCard.defaultProps = {
  imageURL: 'https://placehold.it/150x225',
  title: 'Some Title',
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum deserunt quidem enim optio eos omnis itaque cum incidunt corporis officiis! Non, minus ex distinctio incidunt consectetur assumenda ipsam ut ipsum.",
  genres: ["Action", "SciFi"],
  year: 2000,
  status: 0,
}

export default ItemCard;
