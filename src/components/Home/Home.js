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
import FiltersImg from "../../img/filters.svg";
import FilterStyled from "../../style/FilterStyled.style";
import UserAvatar from "../../img/user_avatar.svg";
import ModalNewCard from "../../components/Modal/ModalNewCard";
import Footer from "../Footer/Footer";
// import HomeAboutCard from "./HomeAboutCard";
import { Redirect } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_TOKEN_MAP_KEY,
  scrollZoom: false
});

function Home(props) {
  const [data, setData] = React.useState({
    cards: {
      1: [
        {
          card_id: 0,
          card_user_avatar: UserAvatar,
          card_user_name: "Claudia Boudié",
          card_title: "Pizza pour l'aprèm",
          card_user_job: "Designer",
          card_desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
          card_user_mood: [FoodIcon],
          card_user_mood_map: [FoodIconMap],
          card_geometry: {
            type: "Point",
            coordinates: [2.36517, 48.83501]
          },
          card_participants: [
            {
              card_participant_id: 0,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Albert",
              card_participant_job: "CTO"
            },
            {
              card_participant_id: 1,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Guillaume",
              card_participant_job: "Freelance"
            },
            {
              card_participant_id: 2,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Alice",
              card_participant_job: "RH"
            }
          ]
        },
        {
          card_id: 1,
          card_user_avatar: UserAvatar,
          card_user_name: "Lucas Tostée",
          card_title: "Kebab pour le déj",
          card_user_job: "Dev AWS claqué",
          card_desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
          card_user_mood: [CultureMood],
          card_user_mood_map: [CultureMoodMap],
          card_geometry: {
            type: "Point",
            coordinates: [2.37358, 48.837551]
          },
          card_participants: [
            {
              card_participant_id: 0,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Albert",
              card_participant_job: "CTO"
            },
            {
              card_participant_id: 1,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Guillaume",
              card_participant_job: "Freelance"
            },
            {
              card_participant_id: 2,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Alice",
              card_participant_job: "RH"
            }
          ]
        },
        {
          card_id: 2,
          card_user_avatar: UserAvatar,
          card_user_name: "Diane",
          card_title: "Balade sportive",
          card_user_job: "Chomeuse",
          card_desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
          card_user_mood: [BeerIcon],
          card_user_mood_map: [BeerIconMap],
          card_geometry: {
            type: "Point",
            coordinates: [2.37523, 48.83022]
          },
          card_participants: [
            {
              card_participant_id: 0,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Albert",
              card_participant_job: "CTO"
            },
            {
              card_participant_id: 1,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Guillaume",
              card_participant_job: "Freelance"
            },
            {
              card_participant_id: 2,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Alice",
              card_participant_job: "RH"
            }
          ]
        }
      ],
      2: [
        {
          card_id: 3,
          card_user_avatar: UserAvatar,
          card_user_name: "Margaux",
          card_title: "Balade dans les champs",
          card_user_job: "Barmaid",
          card_desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
          card_user_mood: [BeerIcon],
          card_user_mood_map: [BeerIconMap],
          card_geometry: {
            type: "Point",
            coordinates: [2.37523, 48.83501]
          },
          card_participants: [
            {
              card_participant_id: 0,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Albert",
              card_participant_job: "CTO"
            },
            {
              card_participant_id: 1,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Guillaume",
              card_participant_job: "Freelance"
            },
            {
              card_participant_id: 2,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Alice",
              card_participant_job: "RH"
            }
          ]
        },
        {
          card_id: 4,
          card_user_avatar: UserAvatar,
          card_user_name: "Mélina",
          card_title: "Apéro",
          card_user_job: "Kebabier",
          card_desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
          card_user_mood: [BeerIcon],
          card_user_mood_map: [BeerIconMap],
          card_geometry: {
            type: "Point",
            coordinates: [2.37523, 48.836551]
          },
          card_participants: [
            {
              card_participant_id: 0,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Albert",
              card_participant_job: "CTO"
            },
            {
              card_participant_id: 1,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Guillaume",
              card_participant_job: "Freelance"
            },
            {
              card_participant_id: 2,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Alice",
              card_participant_job: "RH"
            }
          ]
        },
        {
          card_id: 5,
          card_user_avatar: UserAvatar,
          card_user_name: "Sarah",
          card_title: "Pates carbo",
          card_user_job: "Educatrice",
          card_desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arcu feugiat massa mauris. Praesent id et nullam nec odio porta morbi morbi sem. Cursus ut placerat turpis molestie neque mattis. Maecenas pulvinar ac scelerisque sit mauris nunc in mi. Sit pulvinar proin egestas dolor a at.",
          card_user_mood: [FoodIcon],
          card_user_mood_map: [FoodIconMap],
          card_geometry: {
            type: "Point",
            coordinates: [2.37523, 48.83022]
          },
          card_participants: [
            {
              card_participant_id: 0,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Albert",
              card_participant_job: "CTO"
            },
            {
              card_participant_id: 1,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Guillaume",
              card_participant_job: "Freelance"
            },
            {
              card_participant_id: 2,
              card_participant_avatar: UserAvatar,
              card_participant_name: "Alice",
              card_participant_job: "RH"
            }
          ]
        }
      ]
    },
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
    pageCount: Object.keys(data.cards).length
  });

  React.useEffect(() => {
    if (window.screen.width < 700 && document.querySelector(".user--profile--header")) {
      document.querySelector(".user--profile--header").style.display = "none";
      document.querySelector("body").style.background = "#F7F6F7";
    }

    if (window.screen.width > 1000) {
      document.querySelector("body").style.overflow = "hidden";
    }
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
    newState.isModalCard = false;

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

  // if (redirect.isRedirect) return <Redirect to={`/aboutCard/${redirect.redirectCardId}`}></Redirect>;
  if (redirect.isRedirect)
    return (
      <Redirect
        to={{
          pathname: `/aboutCard/${redirect.redirectCardId}`,
          state: { cardDetails: redirect.cardDetails }
        }}
      ></Redirect>
    );

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
            {data.cards[paginationData.currentPage].map((card, index) => {
              return (
                <Marker coordinates={card.card_geometry.coordinates} key={index}>
                  <div
                    style={{
                      display: "block",
                      backgroundImage: `url(${card.card_user_mood_map})`,
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
            })}
          </Map>
        </section>
        <section className="section--cards">
          {data.isModalNewCard && (
            <ModalNewCard
              updateStateParent={closeModalOutside}
              isMarginTop={true}
              isModalNewCard={data.isModalNewCard}
            ></ModalNewCard>
          )}
          <div className="title--page">
            <h1>Propositions autour de vous</h1>
            <div>
              <img src={SquigglesImg} alt="squiggles--img"></img>
            </div>
          </div>
          <FilterStyled>
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
          <div className="feed--cards">
            {data.modalCardData && (
              <HomeCards
                card={data.modalCardData}
                isModalCard={data.modalCardData}
                updateStateParent={closeModalOutside}
              ></HomeCards>
            )}
            {data.cards[paginationData.currentPage].map((card, index) => {
              return (
                <HomeCards
                  card={card}
                  key={index}
                  isCardFeed={true}
                  updateStateParent={closeModalOutside}
                  aboutCard={() => aboutCard(card)}
                ></HomeCards>
              );
            })}
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
