import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;

  overflow: hidden;

  width: 100%;
  height: 62px;
  max-width: 350px;

  text-decoration: none;

  border-radius: 8px;
  margin-top: 40px;

  background-color: ${({ background }) => background};
  transition: background-color .2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ backgroundHover }) => backgroundHover};
  }

  > strong {
    flex: 1;

    font-size: 15.5px;

    text-align: center;
    font-weight: 500;
    color: ${({ color }) => color};
  }

  > span {
    display: flex;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.08);

    width: 72px;
    height: 100%;

    > img {
      width: 24px;
    }
  }
`
