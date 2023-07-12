const Header = ({ logo, logoName, menuBar }) => {
  return (
    <header>
      <div className="logo">{logo}</div>
      <div className="center_bar">
        <div className="logo_name">{logoName}</div>
      </div>
      <div className="menu_bar">{menuBar}</div>
    </header>
  );
};

export default Header;
