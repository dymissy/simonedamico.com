import "./Header.scss";
import Icon from "./Icons/Icon";

const Header = ({ menuItems, socialItems }) => (
    <header className="container">
        <div className="row">
            <nav className="socials col-md-5">
                <ul className="nav">
                    {socialItems.map((item) => (
                        <li key={item.href}>
                            <a
                                className={`icon ${item.label.toLowerCase()}`}
                                href={item.href}
                                title={item.label}
                                target={item.target}
                            >
                                <Icon name={item.label} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="menu col">
                <ul className="nav justify-content-end">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <a
                                className={item.label.toLowerCase()}
                                href={`#${item.href}`}
                                title={item.label}
                                target={item.target}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
