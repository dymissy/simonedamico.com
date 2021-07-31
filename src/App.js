import Header from "./Header/Header";
import data from "./backoffice.json";

function App() {
    return (
        <div className="App">
            <Header menuItems={data.menu} socialItems={data.social} />
        </div>
    );
}

export default App;
