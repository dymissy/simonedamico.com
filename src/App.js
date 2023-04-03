import Header from "./Header/Header";
import WhoIAm from "./WhoIAm/WhoIAm";
import data from "./backoffice.json";

function App() {
    return (
        <div className="App">
            <Header menuItems={data.menu} socialItems={data.social} />
            <WhoIAm {...data.whoiam} />
        </div>
    );
}

export default App;
