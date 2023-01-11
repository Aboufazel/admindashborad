import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Root from "./routes/Root";
import GiveContextProvider from "./Context/GiveId";

function App() {
    return (
        <GiveContextProvider>
            <ThemeProvider dir={"rtl"}>
                <Root/>
            </ThemeProvider>
        </GiveContextProvider>
    );
}

export default App;
