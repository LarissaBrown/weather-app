import React, {useEffect} from "react";
import CarouselSlideItem from "./CarouselSlideItem";
import { connect } from "react-redux";
// import { getItemsByVisibilityFilter , getItems} from "../redux/reducers/selectors";
// import { VISIBILITY_FILTERS } from "../constants";
import { useDispatch } from "react-redux";
import { loadData } from "../redux/actions";
import {
  makeSelectCurrentWeather,
  makeSelectFiveDayData,
  makeSelect_Players,
} from "../redux/selectors"



const Carousel = () => {

  const slideWidth = 30;

  const weather = makeSelectCurrentWeather(state => state.weather)
  const fiveDayData = makeSelectFiveDayData(state => state.fiveDayData)
  const _players = makeSelect_Players(state => state._players)
 
  const dispatch = useDispatch()


useEffect(() => {

 dispatch(loadData(_players, weather, fiveDayData))

}, [_players, dispatch, weather, fiveDayData])


  


  const length = _players.length;
  _players.push(..._players);

  const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const createLocalItem = (pos, i) => {
    let idx = i;
    console.log("idxPLAYER", _players[idx]);
    const localItem = {
      styles: {
        transform: `translateX(${pos * slideWidth}rem)`,
      },
      player: _players[idx].player,
    };

    switch (pos) {
      case length - 1:
      case length + 1:
        localItem.styles = { ...localItem.styles, filter: "grayscale(1)" };
        break;
      case length:
        break;
      default:
        localItem.styles = { ...localItem.styles, opacity: 1 };
        break;
    }

    return localItem;
  };

  const keys = Array.from(Array(_players.length).keys());

  const [localItems, setlocalItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = localItems.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setlocalItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setlocalItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (i, localItems) => {
    if (i === activeIdx - 1) {
      return;
    }
    if (i === localItems.length - 1) {
      return;
    } else if (i < activeIdx) prevClick(activeIdx - i);
    else if (i > activeIdx) nextClick(i - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (localItems[0] % length)) % length) // prettier-ignore
  }, [localItems, length]);

  console.log("activeIdx", activeIdx);
  console.log("localItems[0]", localItems[0]);
  console.log("length-1", length - 1);

  return (
    <div className="carousel__wrap">
      <button
        className={
          activeIdx !== localItems[0]
            ? "carousel__btn carousel__btn--prev"
            : "hidden-arrow--next"
        }
        style={{ left: "30%" }}
        onClick={() => prevClick()}
      >
        <i className="carousel__btn-arrow carousel__btn-arrow--left" />
      </button>
      <button
        className={
          activeIdx !== length - 1
            ? "carousel__btn carousel__btn--next"
            : "hidden-arrow--next"
        }
        style={{ right: "30%" }}
        onClick={() => nextClick()}
      >
        <i className="carousel__btn-arrow carousel__btn-arrow--right" />
      </button>
      <div className="carousel__inner">
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {localItems.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                item={createLocalItem(pos, i, activeIdx)}
                idx={i}
              />
            ))}
          </ul>
        </div>

        <div className="carousel__dots">
          {localItems.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={(() => handleDotClick(i), localItems)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = function(state) {
 
  const {weather, loading, fiveDayData, _players} = state
  return {
    weather: weather,
   loading: loading,
    fiveDayData: fiveDayData,
    _players: _players
  }
}

export default connect(mapStateToProps)
  (Carousel)
