import React from "react";
import axios from "axios";
import FilterSearch from "../../style/FilterSearch.style";

function InputSearch(props) {
  const inputCity = React.createRef(null);
  const [state, setState] = React.useState({
    citiesSuggestionsArr: [],
    hideSuggestions: true
  });

  async function citySearched(e) {
    e.persist();

    const newState = { ...state };

    if (e.target.value !== "") {
      const { data } = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=${process.env.REACT_APP_TOKEN_MAP_KEY}`
      );

      newState.citiesSuggestionsArr = data.features;
      newState.hideSuggestions = false;

      setState(newState);
      props.emitHiddenSuggestions({ hideSuggestions: newState.hideSuggestions });
    }

    newState.citiesSuggestionsArr = [];
    newState.hideSuggestions = true;

    return setState(newState);
  }

  function citySelected(e, city) {
    e.stopPropagation();
    e.preventDefault();

    const newState = { ...state };
    console.log(city);
    inputCity.current.value = city.place_name;
    newState.hideSuggestions = true;

    setState(newState);
    props.emitCitySelected({ long: city.center[0], lat: city.center[1] });
    // call api pour envoyer {long: city.center[0], lat: city.center[1]}
  }

  return (
    <>
      <FilterSearch>
        <div>
          <input
            type="text"
            placeholder="Paris 10"
            ref={inputCity}
            onChange={e => citySearched(e)}
          ></input>
          {!state.hideSuggestions && (
            <div id="suggestions" className="cities--suggestions">
              {state.citiesSuggestionsArr.map((city, index) => {
                return (
                  <p key={index} onClick={e => citySelected(e, city)}>
                    {city.place_name}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </FilterSearch>
    </>
  );
}

export default InputSearch;
