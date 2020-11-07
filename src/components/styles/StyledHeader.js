import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: black;
  margin-top:0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  .logo {
   background-color: ;
    width: 500px;
    height: 150px;
    
  }
svg text{
  stroke: gold;
  font-size: 250px;
  font-weight: 700;
  stroke-width: 6;
  animation: textAnimate 15s infinite alternate;
}

@keyframes textAnimate{
  0%{
      stroke-dasharray: 0 50%;
      stroke-dashoffset: 30%;
  }
  100%{
      stroke-dasharray: 50% 0;
      stroke-dashoffset: -15%;
  }
}

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;
   

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;


// export const StyledRMDBLogo = styled.img`
//   width: 250px;
//   margin-top: 20px;

//   @media screen and (max-width: 500px) {
//     width: 150px;
//     margin-top: 5px;
//   }
// `;

// export const StyledTMDBLogo = styled.img`
//   width: 122px;
//   margin-top: 25px;
//   float: right;

//   @media screen and (max-width: 500px) {
//     display: inline-block;
//     width: 80px;
//     margin-top: 0px;
//   }
// `;
