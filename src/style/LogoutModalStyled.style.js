import styled from "styled-components";

const ModalStyled = styled.div`
  font-family: ${props => props.theme.fontFamilyText};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  .modal-content {
    top: 34%;
  }
  .modal-footer {
    a {
      border: none;
      background-color: ${props => props.theme.color};
      font-size: 1.5em;
    }
  }
`;

export default ModalStyled;
