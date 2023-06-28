import React from 'react';
import './ItemCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { CaretUpFill, CaretDownFill, XLg } from 'react-bootstrap-icons';


const ItemCard = (props) => {
  let bg = () => {
    switch (props.status) {
      case 1:
        return 'bg-success-subtle';
      case -1:
        return 'bg-danger-subtle';
      default:
        return 'bg-white';
    }
  }

  let likeButton = <button className="btn btn-success p-0 rounded-top-5 rounded-bottom-0 fw-bolder" onClick={() => props.onLike(props)}><CaretUpFill /></button>
  let dislikeButton = <button className="btn btn-danger p-0 rounded-bottom-5 rounded-top-0 fw-bolder" onClick={() => props.onDislike(props)}><CaretDownFill /></button>

  if (props.status === 1)
    likeButton = <button className="btn btn-warning p-0 rounded-top-5 rounded-bottom-0 fw-bolder" onClick={() => props.onLike(props)}><XLg /></button>

  if (props.status === -1)
    dislikeButton = <button className="btn btn-warning p-0 rounded-bottom-5 rounded-top-0 fw-bolder" onClick={() => props.onDislike(props)}><XLg /></button>




  return (
    <div className={"card rounded m-1 shadow " + bg} >
      <div className="card-body row py-0 ps-0">
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
          {likeButton}
          {dislikeButton}
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
  onLike: PropTypes.func,
  onDislike: PropTypes.func,
  status: PropTypes.number,
}

ItemCard.defaultProps = {
  imageURL: 'https://placehold.it/150x225',
  title: 'Some Title',
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum deserunt quidem enim optio eos omnis itaque cum incidunt corporis officiis! Non, minus ex distinctio incidunt consectetur assumenda ipsam ut ipsum.",
  genres: ["Action", "SciFi", "Drama"],
  year: 2000,
  onLike: () => console.log(`Liked `),
  status: 0,
}

export default ItemCard;
