import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './components/ItemList/ItemList';
import films from './movies.json';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SearchHeartFill, Stars } from 'react-bootstrap-icons';
import './App.css';



function App() {
  const [searchResults, setSearchResults] = useState(films.slice(0, 20))
  const [preferences, setPreferences] = useState([])
  const [recommendations, setRecommendations] = useState([])

  let preferenceList =
    <div className="bg-secondary-subtle col-12 d-flex align-items-center col-md border-dashed border border-black border-3 rounded-3 opacity-50 h-75">
      <p class='text-center h2'>Search for some films so we can understan your preferences <br /><SearchHeartFill /></p>
    </div>
  if (preferences.length > 0) {
    preferenceList =
      <div className="col-12 col-md p-1 g-0 h-100 bg-primary-subtle h-75">
        <ItemList
          items={[...preferences]}
          className="h-100"
          onItemRemove={(item) => {
            item.status = 0;
            setPreferences(prev => prev.filter(x => x !== item));
          }}>
        </ItemList>
      </div>
  }

  let recomendationsList =
    <div className="bg-secondary-subtle col-12 col-md d-flex align-items-center justify-content-center border border-dashed border-black border-3 rounded-3 opacity-50 h-75">
      <p class='text-center h2'>Recommendations appear here <br /><Stars /></p>
    </div >
  if (recommendations.length > 0) {
    recomendationsList =
      <div className='col-12 col-md bg-primary-subtle h-75'>
        <ItemList
          items={recommendations}
          onItemLike={(item) => {
            item.status = 1;
            setPreferences([item, ...preferences]);
            setRecommendations(prev => prev.filter(x => x !== item))
          }}
          onItemDislike={(item) => {
            item.status = -1;
            setPreferences([item, ...preferences])
            setRecommendations(prev => prev.filter(x => x !== item))
          }}></ItemList>
      </div>
  }





  return (
    <div className="container-fluid">
      <button
        className="btn btn-primary position-fixed start-0 bottom-0 rounded-circle p-3 m-3 z-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#searchPanel"
        aria-controls="offcanvasExample">
        <SearchHeartFill className='fw-bold display-6' />
      </button>

      <div className="container-fluid container-xxl m-auto h-75">

        <div className="row my-5 text-center align-content-center justify-content-center display-5 navbar navbar-expand-md d-md-block d-none">
          <div className="box-flex">Film recommender system </div>

        </div>

        {/* Search Panel Off Canvas */}
        <div className="offcanvas offcanvas-start " tabIndex="-1" id='searchPanel' aria-labelledby="offcanvasLabel">
          <div className='offcanvas-header'>

            <div className="input-group justify-content-center align-items-center d-flex ">
              <input type="text" className="form-control m-1" placeholder='search' aria-label='search' autoFocus />
              <button type="button" class="btn-close" data-bs-target="#searchPanel" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

          </div>

          <ItemList
            id="searchResults"
            className='offcanvas-body overflow-y-scroll '
            items={[...searchResults].filter(x =>
              !preferences.includes(x) &&
              !recommendations.includes(x)
              //|| Boolean(1)
            )
            }
            onItemLike={(item) => {
              item.status = 1;
              setPreferences([item, ...preferences])
              setSearchResults(prev => prev.filter(x => x !== item))
            }}
            onItemDislike={(item) => {
              item.status = -1;
              setPreferences([item, ...preferences])
              setSearchResults(prev => prev.filter(x => x !== item))
            }}
          />

        </div>

        {/* ItemLists */}
        <div className="row rounded-3 vh-100" >


          {/* List of prefered items */}
          {preferenceList}

          <div class='col-12 col-md-3 justify-content-center d-flex align-items-center box my-2'>
            <button className='btn btn-primary fs-3 w-100 p-2 z-4'>
              Recommend
              <Stars></Stars>
            </button>
          </div>

          {/* List of recommended items */}
          {recomendationsList}

        </div>
      </div >

    </div >
  );
}

export default App;



