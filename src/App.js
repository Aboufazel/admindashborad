import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Root from "./routes/Root";
import GiveContextProvider from "./Context/GiveId";
import ReturnTotalProvider from "./Context/ReturnTotalAccount";

function App() {


    return (
            <ReturnTotalProvider>
                <GiveContextProvider>
                    <ThemeProvider dir={"rtl"}>
                        <Root/>
                    </ThemeProvider>
                </GiveContextProvider>
            </ReturnTotalProvider>
    );
}

export default App;
