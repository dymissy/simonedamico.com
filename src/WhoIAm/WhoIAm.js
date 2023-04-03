import "./WhoIAm.scss";

const WhoIAm = ({ greeting, name, role, description, buttons }) => {
    return (
        <section className="who-i-am">
            <div className="who-i-am-mobile container">
                <div className="row">
                    <div className="col">
                        <span class="greeting">{greeting}</span>
                        <h1>{name}</h1>
                        <h2>{role}</h2>
                        <p>{description}</p>

                        {buttons.map((button) => (
                            <a
                                href={button.href}
                                className={`btn btn-${button.style}`}
                            >
                                {button.label}
                            </a>
                        ))}

                        <div className="portrait" />
                    </div>
                </div>
            </div>
            <div className="who-i-am-non-mobile container">
                <div className="row">
                    <div className="col">
                        <span class="greeting">{greeting}</span>
                        <h1>{name}</h1>
                        <h2>{role}</h2>
                        <p>{description}</p>

                        {buttons.map((button) => (
                            <a
                                href={button.href}
                                className={`btn btn-${button.style}`}
                            >
                                {button.label}
                            </a>
                        ))}
                    </div>
                    <div className="col">
                        <div className="portrait" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIAm;
