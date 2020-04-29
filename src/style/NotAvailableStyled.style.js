import styled from 'styled-components'
import GlobalContainer from '../utlis/GlobalContainer'

const NotAvailablestyle = styled(GlobalContainer)`
  align-items: center;
  display: flex;
  max-height: 90vh;
  min-height: 90vh;
  h1 {
    color: ${props => props.theme.colorSecondary};
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
  @media screen and (min-width: 300px) {
    h1 {
      font-size: 2em;
    }
  }
`

export default NotAvailablestyle