import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: url('/images/coming-soon.svg') no-repeat 85% 50%;

  @media screen and (max-width: 1768px) {
    justify-content: flex-start;

    background: url('/images/coming-soon.svg') no-repeat 50% 90%;
    background-size: 750px;
  }

  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 50vh;

    @media screen and (max-width: 1785px) {
      max-width: 100%;

      height: 25vh;
    }

    max-width: 40%;
    width: 100%;

    > button {
      width: 40px;
      margin: 40px 0 0 104px;

      font-size: 18px;

      background: none;
      outline: none;
      cursor: pointer;

      > img {
        width: 42px;
      }
    }
  }
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;

  font-size: 54px;

  @media screen and (max-width: 1768px) {
    font-size: 46px;
  }
`
