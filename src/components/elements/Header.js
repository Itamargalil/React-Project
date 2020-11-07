import React from 'react';
import { Link } from '@reach/router';

// import RMDBLogo from '../images/reactMovie_logo.png';
// import TMDBLogo from '../images/tmdb_logo.svg';

import { 
    StyledHeader, 
    // StyledRMDBLogo, 
    // StyledTMDBLogo
} from '../styles/StyledHeader';

// 1. Learn how to create a styled basic styled component
// 2. Learn how to handle props in styled component
// 3. Create a global style with styled components

const Header = () => (
<StyledHeader>
  <div className="header-content">
    <Link to="/">
      <div className="logo">
    <svg  viewBox="0 0 1350 600">
            <text x="50%" y="50%" fill="transparent" textAnchor="middle">
                Movies App
            </text>
        </svg>
        </div>
      {/* <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" /> */}
    </Link>
    {/* <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" /> */}
    
  </div>
</StyledHeader>
)

export default Header;