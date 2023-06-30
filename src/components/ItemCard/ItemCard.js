import React from 'react';
import './ItemCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { HandThumbsUpFill, HandThumbsDownFill, XLg } from 'react-bootstrap-icons';


const ItemCard = (props) => {

  let likeButton = <button className="btn btn-success m-auto p-1 fw-bolder" onClick={() => props.onLike()}><HandThumbsUpFill /></button>
  let dislikeButton = <button className="btn btn-danger m-auto p-1 fw-bolder" onClick={() => props.onDislike()}><HandThumbsDownFill /></button>
  let deleteButton = <button className="btn btn-warning m-auto p-1 fw-bolder" onClick={() => props.onRemove()}><XLg /></button>
  let buttons = <React.Fragment>{likeButton}{dislikeButton}</React.Fragment>

  let bg = 'bg-white'
  if (props.status === 1)
    bg = 'bg-success-subtle'
  if (props.status === -1)
    bg = 'bg-danger-subtle'



  return (
    <div className={`card col ${bg}`}>
      <div div className="card-body row py-0 ps-0">
        <img src={props.imageURL} alt="Card" className="card-img-left p-0 col-3 ms-2" />
        <div className="row col ms-1 mt-3">
          <div>{props.title}</div>
          <div className='mb-0 align-bottom d-none d-md-block'>
            {props.genres.map((item) => (
              <div className="badge bg-secondary p-1 m-1 col rounded-pill">{item}</div>
            ))}
          </div>
        </div>
        <div className="col-2 row p-3 py-3">
          {props.status === 0 ? buttons : deleteButton}
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
  genres: ["Action", "SciFi", "Drama"],
  year: 2000,
  status: 0,
}

export default ItemCard;
