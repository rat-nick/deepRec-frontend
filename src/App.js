import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './components/ItemList/ItemList';
import films from './movies.json';


function App() {
  const [searchResults, setSearchResults] = useState(films.slice(0, 10))
  const [liked, setLiked] = useState([])
  const [disliked, setDisliked] = useState([])
  const [preferences, setPreferences] = useState([])
  const [recommendations, setRecommendations] = useState([])

  return (
    <div className="container-lg ">
      <div className="row my-5 text-center align-content-center justify-content-center display-5">
        Film recommender system
      </div>
      <div className="row rounded-3 bg-primary-subtle">

        <div className="col-12 col-lg-4 gx-2 my-2">
          <div className="input-group">
            <input type="text" className="form-control m-1" placeholder='search' aria-label='search' />
          </div>
          <ItemList
            items={
              [...searchResults]
                .filter(x =>
                  !preferences.includes(x) &&
                  !recommendations.includes(x)
                  //|| Boolean(1)
                )
            }
            className='overflow-scroll'
            positiveAction={(item) => { item.status = 1; setPreferences([item, ...preferences]) }}
            negativeAction={(item) => { item.status = -1; setPreferences([item, ...preferences]) }}
          ></ItemList>
        </div>
        <div className="col-12 col-lg-4 gx-2 my-2">

          <div className="form-check justify-content-center ps-0">
            <button type="submit" className="btn btn-primary m-1 justify-content-center">Recommend</button>

          </div>
          <ItemList
            items={[...preferences]}
            className='overflow-auto'
            positiveAction={(item) => { item.status = 1; setPreferences([item, ...preferences]) }}
            negativeAction={(item) => { item.status = -1; setPreferences([item, ...preferences]) }}>

          </ItemList>

        </div>
        <div className='col-12 col-lg-4 gx-4 my-2'>
          <div className="form-check justify-content-center ps-0">
            <button type="submit" className="btn btn-primary m-1 justify-content-center">Recommend</button>

          </div>
          <ItemList items={recommendations} className='overflow-auto'></ItemList>
        </div>
      </div>
    </div >
  );
}

export default App;



