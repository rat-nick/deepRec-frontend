import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './components/ItemList/ItemList';
import films from './movies.json';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Search, SearchHeartFill, Stars } from 'react-bootstrap-icons';
import './App.css';



function App() {
  const [searchResults, setSearchResults] = useState(films.slice(0, 20))
  const [preferences, setPreferences] = useState([])
  const [recommendations, setRecommendations] = useState([])

  let preferenceList =
    <h4 className="col-12 col-md d-flex align-items-center border-dashed justify-content-center border border-black border-3 rounded-3 opacity-50 ">
      <p className='justify-content-center h2 d-flex'>
        Search for some films <SearchHeartFill />
      </p>
    </h4 >
  if (preferences.length > 0) {
    preferenceList =
      <div className="col-12 col-md my-2 vh-100">
        <ItemList
          items={[...preferences]}
          onItemRemove={(item) => {
            item.status = 0;
            setPreferences(prev => prev.filter(x => x !== item));
          }}>
        </ItemList>
      </div>
  }

  let recomendationsList =
    <h4 className="col-12 col-md d-flex align-items-center justify-content-center border border-dashed border-black border-3 rounded-3 opacity-50">
      <div className='justify-content-center h2 d-flex'>
        Recommendations appear here <Stars />
      </div>
    </h4>
  if (recommendations.length > 0) {
    recomendationsList =
      <div className='col-12 col-md vh-100'>
        <ItemList
          items={recommendations}
          className='overflow-auto'
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
    <div className="container-fluid m-0 p-0">
      <button
        className="btn btn-primary float-end rounded-start-circle rounded-end-0 p-3 sticky-top"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#searchPanel"
        aria-controls="offcanvasExample">
        <Search className='fw-bold display-6' />
      </button>
      <div className="container-xxl m-auto">
        <div className="row my-5 text-center align-content-center justify-content-center display-5">
          Film recommender system
        </div>

        {/* Search Panel Off Canvas */}
        <div className="offcanvas offcanvas-end " tabIndex="-1" id='searchPanel' aria-labelledby="offcanvasLabel">
          <div className='offcanvas-header'>

            <div className="input-group">
              <input type="text" className="form-control m-1" placeholder='search' aria-label='search' />
              <button type="button" class="btn-close" data-bs-target="#searchPanel" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
          </div>
          <ItemList
            id="searchResults"
            className='offcanvas-body overflow-scroll '
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
          <div class='col-12 col-md-2 justify-content-center d-flex align-items-center'>
            <button className='btn btn-primary'>
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



