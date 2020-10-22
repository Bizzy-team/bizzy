import styled from "styled-components";

const HomeAboutCardStyled = styled.section`
  div {
    .card--title {
      display: flex;
      align-items: center;
      .back--arrow {
        display: flex;
        align-items: center;
      }
    }
  }

  @media screen and (min-width: 300px) {
    div {
      padding-top: 10%;
      .card--title {
        .back--arrow {
          margin-right: 6%;
        }
      }
    }
  }
`;

export default HomeAboutCardStyled;
