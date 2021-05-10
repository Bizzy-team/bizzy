import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import HomeStyled from "../../style/HomeStyled.style";
import HomeCards from "./HomeCards";
import UserProfileHeader from "../UserProfile/UserProfileHeader";
import SquigglesImg from "../../img/squiggles_colorful.svg";
import FoodIcon from "../../img/food_mood.svg";
import FoodIconMap from "../../img/icon_map_food.svg";
import BeerIcon from "../../img/drink_mood.svg";
import BeerIconMap from "../../img/icon_map_drink.svg";
import CultureMood from "../../img/culture_mood.svg";
import CultureMoodMap from "../../img/icon_map_culture.svg";
import SportMood from "../../img/sport_mood.svg";
import SportMoodMap from "../../img/icon_map_sport.svg";
import OpenMindedMood from "../../img/open_mind_mood.svg";
import OpenMindedMoodMap from "../../img/icon_map_open_mind.svg";
import FiltersImg from "../../img/filters.svg";
import FilterStyled from "../../style/FilterStyled.style";
import UserAvatar from "../../img/user_avatar.svg";
import ModalNewCard from "../../components/Modal/ModalNewCard";
import Footer from "../Footer/Footer";
// import HomeAboutCard from "./HomeAboutCard";
import { Redirect } from "react-router-dom";
import ReactPaginate from "react-paginate";
import fakeCards from "./fakeCards.json";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_TOKEN_MAP_KEY,
  scrollZoom: false
});

function Home(props) {
  const refFeedCards = React.useRef(null);

  const [data, setData] = React.useState({
    cards: {},
    isMap: false,
    isModalNewCard: false,
    modalCardData: false
  });

  const [redirect, setRedirect] = React.useState({
    isRedirect: false,
    redirectCardId: null,
    cardDetails: []
  });

  const [paginationData, setCurrentPage] = React.useState({
    currentPage: 1,
    pageCount: 0
  });

  React.useEffect(() => {
    if (window.screen.width < 700 && document.querySelector(".user--profile--header")) {
      document.querySelector(".user--profile--header").style.display = "none";
      document.querySelector("body").style.background = "#F7F6F7";
    }

    if (window.screen.width > 1000) {
      document.querySelector("body").style.overflow = "hidden";
    }

    return formatCards(fakeCards, 4);
  }, []); //eslint-disable-lint

  function displayMap() {
    const newState = { ...data };

    if (!data.isMap) {
      newState.isMap = true;
      document.querySelector("body").style.overflow = "hidden";

      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 0);

      return setData(newState);
    }

    document.querySelector("body").style.overflow = "auto";

    newState.isMap = false;
    newState.isModalCard = false;

    return setData(newState);
  }

  function displayNewCard() {
    const newState = { ...data };

    document.querySelector("body").style.overflow = "hidden";
    newState.isModalNewCard = true;

    return setData(newState);
  }

  function closeModalOutside() {
    const newState = { ...data };

    newState.isModalNewCard = false;
    newState.modalCardData = false;

    document.querySelector("body").style.overflow = "auto";

    return setData(newState);
  }

  function aboutCard(card) {
    const newState = { ...redirect };

    newState.isRedirect = true;
    newState.redirectCardId = card.card_id;
    newState.cardDetails = card;

    return setRedirect(newState);
  }

  function handlePageClick({ selected }) {
    setCurrentPage({
      ...paginationData,
      currentPage: selected + 1
    });
  }

  function formatCards(cardsApi, itemPerPage) {
    let page = 1;
    const pageNumber = Math.ceil(cardsApi.length / itemPerPage);
    const cards = {};

    cardsApi.forEach(function(card) {
      const cardDateFormated = `${new Date(card.card_date_creation).getDate()}/${new Date(
        card.card_date_creation
      ).getMonth() + 1}`;

      if (pageNumber === 0) {
        if (cards[page]) {
          const objectKeys = Object.keys(cards[page]);
          if (cards[page][cardDateFormated] && objectKeys.includes(cardDateFormated)) {
            return cards[page][cardDateFormated].push(card);
          }

          cards[page][cardDateFormated] = [];
          return cards[page][cardDateFormated].push(card);
        }

        cards[page] = {};
        cards[page][cardDateFormated] = [];
        return cards[page][cardDateFormated].push(card);
      }

      if (cards[page]) {
        let cardsInPage = 0;
        Object.keys(cards[page]).map(i => (cardsInPage += cards[page][i].length));

        if (cardsInPage >= itemPerPage) {
          page += 1;
          cards[page] = {};
          cards[page][cardDateFormated] = [];
          return cards[page][cardDateFormated].push(card);
        }

        const objectKeys = Object.keys(cards[page]);
        if (cards[page][cardDateFormated] && objectKeys.includes(cardDateFormated)) {
          return cards[page][cardDateFormated].push(card);
        }

        cards[page][cardDateFormated] = [];
        return cards[page][cardDateFormated].push(card);
      }

      cards[page] = {};
      cards[page][cardDateFormated] = [];
      return cards[page][cardDateFormated].push(card);
    });

    setCurrentPage({
      pageCount: pageNumber,
      currentPage: 1
    });

    setData({
      ...data,
      cards
    });
  }

  function returnIconMoodUrl(cardUserMood, isMarker = false) {
    switch (cardUserMood) {
      case "food":
        return isMarker ? FoodIconMap : FoodIcon;
      case "drink":
        return isMarker ? BeerIconMap : BeerIcon;
      case "culture":
        return isMarker ? CultureMoodMap : CultureMood;
      case "sport":
        return isMarker ? SportMoodMap : SportMood;
      case "openMinded":
        return isMarker ? OpenMindedMoodMap : OpenMindedMood;
      default:
        break;
    }
  }

  function renderMarker() {
    return Object.keys(data.cards[paginationData.currentPage]).map(item => {
      return data.cards[paginationData.currentPage][item].map((card, index) => {
        return (
          <Marker coordinates={card.card_geometry.coordinates} key={index}>
            <div
              style={{
                display: "block",
                backgroundImage: `url(${returnIconMoodUrl(card.card_user_mood, true)})`,
                backgroundRepeat: "no-repeat",
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                backgroundPosition: "-3px -5px",
                backgroundSize: "60px"
              }}
              onClick={() => setData({ ...data, modalCardData: card })}
            ></div>
          </Marker>
        );
      });
    });
  }

  function renderCards() {
    return Object.keys(data.cards[paginationData.currentPage]).map(date => {
      return data.cards[paginationData.currentPage][date].map((card, index) => {
        if (index > 0) {
          return (
            <HomeCards
              key={index}
              card={card}
              imgSrc={returnIconMoodUrl(card.card_user_mood)}
              isCardFeed={true}
              updateStateParent={closeModalOutside}
              aboutCard={() => aboutCard(card)}
              date={date}
            ></HomeCards>
          );
        }

        if (date === `${new Date().getDate()}/${new Date().getMonth() + 1}`) {
          return (
            <React.Fragment key={index}>
              <h2 className="card--date">Aujourd'hui</h2>
              <HomeCards
                card={card}
                imgSrc={returnIconMoodUrl(card.card_user_mood)}
                isCardFeed={true}
                updateStateParent={closeModalOutside}
                aboutCard={() => aboutCard(card)}
                date={date}
              ></HomeCards>
            </React.Fragment>
          );
        }
        if (date === `${new Date().getDate() + 1}/${new Date().getMonth() + 1}`) {
          return (
            <React.Fragment key={index}>
              <h2 className="card--date">Demain</h2>
              <HomeCards
                card={card}
                imgSrc={returnIconMoodUrl(card.card_user_mood)}
                isCardFeed={true}
                updateStateParent={closeModalOutside}
                aboutCard={() => aboutCard(card)}
                date={date}
              ></HomeCards>
            </React.Fragment>
          );
        }
        return (
          <React.Fragment key={index}>
            <h2 className="card--date">{date}</h2>
            <HomeCards
              card={card}
              imgSrc={returnIconMoodUrl(card.card_user_mood)}
              isCardFeed={true}
              updateStateParent={closeModalOutside}
              aboutCard={() => aboutCard(card)}
              date={date}
            ></HomeCards>
          </React.Fragment>
        );
      });
    });
  }

  function sectionScroll() {
    if (document.querySelector(".section--cards").scrollTop >= 1) {
      document.querySelector(".section--cards").style = "overflow: hidden;";
      document.querySelector(".card--date").className = "card--date--fixed";
      document.querySelector(".feed--cards").style =
        "height: 60vh; overflow: auto; margin-top: 5%; position: relative;";
    }
  }

  function updateDate() {
    document.querySelectorAll(".feed--cards > h2").forEach(h2 => {
      if (h2.classList[0] === "card--date--fixed") {
        return;
      }

      if (h2.classList[0] !== "card--date--fixed") {
        if (
          h2.getBoundingClientRect().y <=
          document.querySelector(".feed--cards").getBoundingClientRect().y
        ) {
          document.querySelector(".card--date--fixed").classList.add("card--date");
          document
            .querySelector(".card--date--fixed")
            .classList.remove("card--date--fixed");
          h2.classList.add("card--date--fixed");

          return;
        }
        return h2.classList.remove("card--date--fixed");
      }
    });
  }

  if (redirect.isRedirect)
    return (
      <Redirect
        to={{
          pathname: `/aboutCard/${redirect.redirectCardId}`,
          state: {
            cardDetails: redirect.cardDetails,
            imgSrc: returnIconMoodUrl(redirect.cardDetails.card_user_mood, false),
            imgSrcMap: returnIconMoodUrl(redirect.cardDetails.card_user_mood, true)
          }
        }}
      ></Redirect>
    );

  if (!Object.keys(data.cards).length) return "Loading";

  return (
    <>
      <UserProfileHeader></UserProfileHeader>
      <HomeStyled as="main" isMap={data.isMap}>
        <section id="map">
          <Map
            style="mapbox://styles/mapbox/streets-v11"
            zoom={[14]}
            containerStyle={{ height: "90vh" }}
            center={[2.37001, 48.83746]}
          >
            {renderMarker()}
            {data.modalCardData && (
              <HomeCards
                card={data.modalCardData}
                imgSrc={returnIconMoodUrl(data.modalCardData.card_user_mood)}
                isModalCard={data.modalCardData}
                updateStateParent={closeModalOutside}
                classNameCard="modal--card--about"
              ></HomeCards>
            )}
          </Map>
        </section>
        <section className="section--cards" onScroll={sectionScroll}>
          {data.isModalNewCard && (
            <ModalNewCard
              updateStateParent={closeModalOutside}
              isMarginTop={true}
              isModalNewCard={data.isModalNewCard}
            ></ModalNewCard>
          )}
          {/* <div className="title--page">
            <h1>Propositions autour de vous</h1>
            <div>
              <img src={SquigglesImg} alt="squiggles--img"></img>
            </div>
          </div> */}
          <FilterStyled className="filters--section">
            <div>
              <input type="text" placeholder="Paris 10"></input>
              <button className="btn--filters">
                <div>
                  <img src={FiltersImg} alt="filters-icon"></img>{" "}
                </div>
              </button>
              <button className="btn--create" onClick={displayNewCard}>
                New card
              </button>
            </div>
          </FilterStyled>
          <div className="feed--cards" ref={refFeedCards} onScroll={updateDate}>
            {renderCards()}
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              pageCount={paginationData.pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            ></ReactPaginate>
          </div>
        </section>
        {data.isMap ? (
          <button onClick={displayMap} className="btn--list">
            Retour sur la liste
          </button>
        ) : (
          <button onClick={displayMap} className="btn--map">
            Voir sur la map
          </button>
        )}
      </HomeStyled>
      <Footer isUrlActive={props.match}></Footer>
    </>
  );
}

export default Home;
