import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './components/ItemList/ItemList';
import films from './movies.json';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Search } from 'react-bootstrap-icons';

function App() {
  const [searchResults, setSearchResults] = useState(films.slice(0, 10))
  const [liked, setLiked] = useState([])
  const [disliked, setDisliked] = useState([])
  const [preferences, setPreferences] = useState([])
  const [recommendations, setRecommendations] = useState([])
  
  return (
    <div className="container-fluid m-0 p-0">
    <button 
      className="btn btn-primary float-end rounded-start-circle rounded-end-0 p-3 sticky-top" 
      type="button" 
      data-bs-toggle="offcanvas" 
      data-bs-target="#searchPanel" 
      aria-controls="offcanvasExample">
      <Search className='fw-bold display-6'/>
    </button>  
    <div className="container-xl">
      <div className="row my-5 text-center align-content-center justify-content-center display-5">
        Film recommender system
      </div>
      <div className="row rounded-3 bg-primary-subtle">
      
        <div className="offcanvas offcanvas-end " tabIndex="-1" id='searchPanel' aria-labelledby="offcanvasLabel">
          <div className='offcanvas-header'>
            
            <div className="input-group">
              <input type="text" className="form-control m-1" placeholder='search' aria-label='search' />
              <button type="button" class="btn-close" data-bs-target="#searchPanel" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
          </div>
          <ItemList
            id = "searchResults"
            className='offcanvas-body overflow-scroll'
            items={[...searchResults].filter(x =>
                  !preferences.includes(x) &&
                  !recommendations.includes(x)
                  //|| Boolean(1)
                )
            }
            positiveAction={(item) => { item.status = 1; setPreferences([item, ...preferences]) }}
            negativeAction={(item) => { item.status = -1; setPreferences([item, ...preferences]) }}
          />
    
        </div>
        <div className="col-12 col-md gx-2 my-2">
          <div className="form-check justify-content-center ps-0">
            <button type="submit" className="btn btn-primary m-1 justify-content-center">Recommend</button>
          </div>
          <ItemList
            items={[...preferences]}
            // className='overflow-auto'
            positiveAction={(item) => { item.status = 1; setPreferences([item, ...preferences]) }}
            negativeAction={(item) => { item.status = -1; setPreferences([item, ...preferences]) }}>
          </ItemList>

        </div>
        <div className='col-12 col-md gx-4 my-2'>
          <div className="form-check justify-content-center ps-0">
            <button type="submit" className="btn btn-primary m-1 justify-content-center">Recommend</button>
          </div>
          <ItemList items={recommendations} className='overflow-auto'></ItemList>
        </div>
      </div>
    </div >
    
    </div>
  );
}

export default App;



