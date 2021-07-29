function Header({menuItems, socialItems}) {
  return (
    <header>
      <nav className="socials">{JSON.stringify(socialItems)}</nav>
      <nav className="menu">{JSON.stringify(menuItems)}</nav>
    </header>
  );
}

export default Header;