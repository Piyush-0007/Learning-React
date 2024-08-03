import logo from "../resources/icon.png";

const Header = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <ul className="header">
        <li className="item"><a href="/">Home</a></li>
        <li className="item">Gallery</li>
        <li className="item"><a href="/about">About Us</a></li>
        <li className="item">Contact Us</li>
      </ul>
    </nav>
  );
};
export default Header;