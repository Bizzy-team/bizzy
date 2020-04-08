import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);
    .modal-content {
      top: 34%;
    }
`;

export default ModalStyled;