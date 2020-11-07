import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
  background: gold;
  width: 25%;
  min-width: 200px;
  height: 70px;
  color: #1c1c1c;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Abel', sans-serif;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;
  font-weight: bold;
  border: 1px solid #1c1c1c; 

  :hover {
    opacity: 0.7;
  }
`;
