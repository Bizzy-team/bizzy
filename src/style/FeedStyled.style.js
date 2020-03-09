import styled from "styled-components";

export const FilterStyled = styled.section`
  background-color: grey;
  display: flex;
  font-size: 2em;
    div {
      margin-right: 12%;
    }
    .status {
      font-size: 0.5em;
    }
    .date {
      text-align: center;
      .btn-circle {
        width: 30px;
        height: 30px;
        text-align: center;
        padding: 6px 0;
        font-size: 12px;
        line-height: 1.428571429;
        border-radius: 15px;
        background-color: white;
      }
    }
`

export const FeedStyle = styled.section`
  background: red;
`
