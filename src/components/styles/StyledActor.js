import styled from 'styled-components';

export const StyledActor = styled.div`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: #353535;
  border-radius: 15px;
  padding: 3px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  .actor-name {
    display: block;
    font-size: 22px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 18px;
    margin: 0 0 10px 0;
    font-weight: 500;
    color: orange;
  }
`;
