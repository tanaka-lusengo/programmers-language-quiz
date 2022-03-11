import "./Header.scss";
import Logo from "../../assets/images/quiz.svg";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="logo" alt="Quiz logo" src={Logo} />
        </div>
      </Link>
    </div>
  );
};
export default Header;
