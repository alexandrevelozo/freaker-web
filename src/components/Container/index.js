import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1351px;

  margin: 0 auto;

  @media screen and (max-width: 1420px) {
    max-width: 1051px;
  }

  @media screen and (max-width: 1100px) {
    max-width: 851px;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    margin-top: 50px;

    h1 {
      padding-bottom: 6px;
    }
    p {
      padding-bottom: 18px;
    }
  }
`

export default Container
