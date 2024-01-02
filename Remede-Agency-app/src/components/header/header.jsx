
import { MainNav, MainNavItem, MainNavLogo, MainNavLogoImage } from '../styles/headerStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
      <MainNav>
        <MainNavLogo to="/">
          <MainNavLogoImage src="../src/assets/img/argentBankLogo.png" alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </MainNavLogo>
        <div>
          <MainNavItem to="/login">
            <FontAwesomeIcon className="fa fa-user-circle" icon={faUserCircle} />
            Sign In
          </MainNavItem>
        </div>
      </MainNav>
    );
  };
  
  export default Header;