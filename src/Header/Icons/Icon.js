const MailIcon = () => (
    <svg
        width="20px"
        height="16px"
        viewBox="0 0 20 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>mail</title>
        <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <g
                id="mail"
                transform="translate(-2.000000, -5.000000)"
                fill="#161616"
                fillRule="nonzero"
            >
                <path d="M20.75,17.5 C20.75,17.626875 20.725625,17.746875 20.690625,17.86125 L15.125,11.875 L20.75,7.5 L20.75,17.5 L20.75,17.5 Z M4.2225,18.71625 L9.8625,12.70625 L12,14.321875 L14.045,12.69625 L19.7775,18.71625 C19.688125,18.736875 4.311875,18.736875 4.2225,18.71625 L4.2225,18.71625 Z M3.25,17.5 L3.25,7.5 L8.875,11.875 L3.309375,17.86125 C3.274375,17.746875 3.25,17.626875 3.25,17.5 L3.25,17.5 Z M20.125,6.25 L12,12.5 L3.875,6.25 L20.125,6.25 L20.125,6.25 Z M19.5,5 L4.5,5 C3.119375,5 2,6.119375 2,7.5 L2,17.5 C2,18.880625 3.119375,20 4.5,20 L19.5,20 C20.880625,20 22,18.880625 22,17.5 L22,7.5 C22,6.119375 20.880625,5 19.5,5 L19.5,5 Z"></path>
            </g>
        </g>
    </svg>
);

const Icons = {
    mail: MailIcon,
};

const Icon = ({ name }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) {
        return null;
    }

    return <IconComponent />;
};

export default Icon;
