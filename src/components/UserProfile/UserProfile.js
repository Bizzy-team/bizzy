import React from "react";
import Header from "../Header/Header";
import UserProfileStyled from "../../style/UserProfileStyled.style";
import EditImg from "../../img/edit_img.svg";
import InputsForm from "../InputsForm/InputsForm";
import bcImg from "../../img/bc_desktop.svg";
import IconSettings from "../../img/settings_mobile.svg";
import IconSectionCards from "../../img/icon_cards.svg";
import IconAdd from "../../img/icon_add.svg";
import Arrow from "../../img/arrow.svg";
import Modal from "../Modal/ModalResetPswd";
import ModalDeleteProfile from "../Modal/ModalDeleteProfile";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardsProfile from "../Cards/CardsProfile";
import ModalNewCard from "../Modal/ModalNewCard";

// import Footer from "../Footer/Footer";

function UserProfile() {
  const inputFirstName = React.useRef(null);
  const inputLastName = React.useRef(null);
  const inputMail = React.useRef(null);
  const inputJob = React.useRef(null);
  const inputCity = React.useRef(null);
  const refInputMessage = React.useRef(null);

  const [data, setData] = React.useState({
    btnDisabled: true,
    error: {},
    isDisabled: true,
    showModal: false,
    isModalDeleteProfile: false,
    isModalNewCard: false
    // isBtnCancel: false
  });

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: { max: 700, min: 300 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 10
    }
  };

  React.useEffect(() => {
    const arrInputId = [
      "inputFirstName",
      "inputLastName",
      "inputMail",
      "inputJob",
      "inputCity",
      "inputMessage"
    ];
    const newState = { ...data };
    const obj = {
      error: false,
      message: "",
      accessToChange: false
    };

    arrInputId.forEach(element => (newState.error[element] = { ...obj }));

    return setData(newState);
  }, []); //eslint-disable-line

  function editData() {
    const newState = { ...data };

    newState.isDisabled = false;

    return setData(newState);
  }

  function confirmEdit() {
    const newState = { ...data };

    newState.isDisabled = true;
    // Fetch POST data if changed

    return setData(newState);
  }

  function checkUserData(e) {
    e.preventDefault();

    const newState = { ...data };
    const inputIdTarget = e.target.id;

    if (e.type === "change") {
      if (!newState.error[inputIdTarget].accessToChange) {
        return;
      }
    }

    if (e.target.value === "") {
      if (newState.error[inputIdTarget].accessToChange) {
        return updateState(inputIdTarget, "Champs vide.");
      }
      return;
    }

    if (inputIdTarget === "inputMail") {
      if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          e.target.value
        ) === false
      )
        return updateState(inputIdTarget, "Format mail incorrect");
    }

    if (!newState.error[inputIdTarget].accessToChange) {
      newState.error[inputIdTarget].accessToChange = true;
    }
    newState.error[inputIdTarget].error = false;
    newState.error[inputIdTarget].message = "";

    if (
      inputFirstName.current.value !== "" ||
      inputLastName.current.value !== "" ||
      inputMail.current.value !== "" ||
      inputJob.current.value !== "" ||
      inputCity.current.value !== ""
    ) {
      const btnEnabled = Object.values(newState.error).every(el => !el.error);

      if (btnEnabled) {
        newState.btnDisabled = false;
      } else {
        newState.btnDisabled = true;
      }
    }

    return setData(newState);
  }

  function updateState(inputId, errorMessage) {
    const newState = { ...data };

    newState.error[inputId].error = true;
    newState.error[inputId].message = errorMessage;

    if (!newState.error[inputId].accessToChange) {
      newState.error[inputId].accessToChange = true;
    }

    if (!newState.btnDisabled) {
      newState.btnDisabled = true;
    }

    return setData(newState);
  }

  function isModal(e) {
    const newState = { ...data };

    if (e.target.id === "btn--change--pswd") {
      newState.showModal = true;
      document.querySelector("body").style.overflow = "hidden";

      return setData(newState);
    }

    if (e.target.id === "btn--delete--profile") {
      newState.isModalDeleteProfile = true;
      // newState.isBtnCancel = true;
      document.querySelector("body").style.overflow = "hidden";

      return setData(newState);
    }

    if (e.target.className === "new--card--btn") {
      newState.isModalNewCard = true;
      document.querySelector("body").style.overflow = "hidden";

      return setData(newState);
    }

    newState.showModal = false;
    newState.isModalDeleteProfile = false;
    newState.isModalNewCard = false;
    document.querySelector("body").style.overflow = "auto";

    return setData(newState);
  }

  // function addInput(e) {
  //   if (e.keyCode === 13) {
  //     document.activeElement.blur();
  //   }
  // }

  return (
    <>
      <Header />
      <UserProfileStyled
        as="main"
        isDisabled={data.isDisabled}
        btnDisabled={data.btnDisabled}
      >
        {data.showModal && <Modal closeModal={isModal}></Modal>}
        {data.isModalDeleteProfile && (
          <ModalDeleteProfile closeModal={isModal}></ModalDeleteProfile>
        )}
        {data.isModalNewCard && <ModalNewCard></ModalNewCard>}
        <section className="profile--user--data">
          <div className="profile--user--data--title">
            <div className="profile--user--data--img">
              <img src={EditImg} alt="edit--img"></img>
            </div>
            <div className="profile--user--data--name">
              <h2>Hello Katrine :)</h2>
            </div>
          </div>
          <div className="profile--user--data--form">
            <div className="input--data--name">
              <InputsForm
                type="text"
                inputId="inputFirstName"
                inputRef={inputFirstName}
                inputPlaceholder="Katrine"
                inputCheckError={checkUserData}
                isDisabled={data.isDisabled}
                isError={data.error.inputFirstName ? data.error.inputFirstName : ""}
              ></InputsForm>
              <InputsForm
                type="text"
                inputId="inputLastName"
                inputRef={inputLastName}
                inputPlaceholder="Moreau"
                inputCheckError={checkUserData}
                isDisabled={data.isDisabled}
                isError={data.error.inputLastName ? data.error.inputLastName : ""}
              ></InputsForm>
            </div>
            <InputsForm
              type="mail"
              inputId="inputMail"
              inputRef={inputMail}
              inputPlaceholder="adresse@gmail.com"
              inputCheckError={checkUserData}
              isDisabled={data.isDisabled}
              isError={data.error.inputMail ? data.error.inputMail : ""}
            ></InputsForm>
            <InputsForm
              type="text"
              inputId="inputJob"
              inputRef={inputJob}
              inputPlaceholder="Votre poste"
              inputCheckError={checkUserData}
              isDisabled={data.isDisabled}
              isError={data.error.inputJob ? data.error.inputJob : ""}
            ></InputsForm>
            <InputsForm
              type="text"
              inputId="inputCity"
              inputRef={inputCity}
              inputPlaceholder="Votre ville"
              inputCheckError={checkUserData}
              isDisabled={data.isDisabled}
              isError={data.error.inputCity ? data.error.inputCity : ""}
            ></InputsForm>
            <div className="profile--user--about">
              <textarea
                id="inputMessage"
                rows="6"
                cols="34"
                placeholder="Ajoutez une description à votre profil :)."
                disabled={data.isDisabled}
                ref={refInputMessage}
                onBlur={checkUserData}
                onChange={checkUserData}
              ></textarea>
            </div>
            <div className="profile--user--btn">
              <input
                type="button"
                value="Modifier vos données"
                className="profile--user--btn--edit"
                onClick={editData}
              ></input>
              <div className="profile--user--btn--confirm">
                <input
                  type="button"
                  value="Sauvegarder"
                  disabled={data.btnDisabled}
                  className="profile--user--btn--save"
                  onClick={confirmEdit}
                ></input>
                <input
                  type="button"
                  value="Annuler"
                  className="profile--user--btn--cancel"
                  onClick={confirmEdit}
                ></input>
              </div>
            </div>
          </div>
        </section>
        <div className="profile--about--account">
          <section className="profile--security">
            <div className="profile--security--title">
              <h2>Connexion et sécurité</h2>
              <div className="profile--security--img">
                <img src={IconSettings} alt="settings--icon"></img>
              </div>
            </div>
            <div className="profile--security--buttons">
              <input
                type="button"
                value="Changer mon mot de passe"
                id="btn--change--pswd"
                onClick={isModal}
              ></input>
              <input
                type="button"
                value="Supprimer mon profil"
                id="btn--delete--profile"
                onClick={isModal}
              ></input>
            </div>
          </section>
          {/* Si les cards sont vides */}
          <section className="profile--user--cards">
            <div className="profile--user--cards--title">
              <h2>Vos dernières annonces</h2>
              <div className="profile--user--cards--img">
                <img
                  src={IconSectionCards}
                  alt="icon--section--cards"
                  className="icon--cards"
                ></img>
                <img src={Arrow} alt="icon--arrow" className="icon--arrow--left"></img>
                <img src={Arrow} alt="icon--arrow" className="icon--arrow--right"></img>
              </div>
            </div>
            <div className="line"></div>
            <div className="user--cards">
              <p>Vous n'avez jamais posté quelque chose ici.</p>
              <p>
                N'hésitez pas à proposer des activités à la communauté Bizzy, créez votre
                première card !
              </p>
              <div className="user--cards--btn">
                <input
                  type="button"
                  value="New Card"
                  className="new--card--btn"
                  onClick={isModal}
                ></input>
                <div>
                  <img src={IconAdd} alt="add--card"></img>
                </div>
              </div>
            </div>
          </section>

          {/* Si il y  a des cards */}
          {/* <section className="profile--user--cards" style={{ width: "40vw" }}> */}
          <section className="profile--user--cards">
            {/* <section> */}
            <Carousel
              arrows
              className=""
              containerClass="container"
              dotListClass=""
              focusOnSelect={false}
              // infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={false}
              sliderClass=""
              slidesToSlide={3}
              swipeable
              partialVisible="right"
            >
              <CardsProfile></CardsProfile>
              <CardsProfile></CardsProfile>
              <CardsProfile></CardsProfile>
            </Carousel>
          </section>
        </div>
      </UserProfileStyled>
      {/* <Footer /> */}
    </>
  );
}

export default UserProfile;
