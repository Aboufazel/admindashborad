import './App.css';
import Root from "./routes/Root";
import GiveContextProvider from "./Context/GiveId";
import ReturnTotalProvider from "./Context/ReturnTotalAccount";
import theme from "./themes/theme";
import {ThemeProvider} from "@mui/material";

function App() {


    return (
            <ReturnTotalProvider>
                <GiveContextProvider>
                    <ThemeProvider theme={theme} dir={"rtl"}>
                        <Root/>
                    </ThemeProvider>
                </GiveContextProvider>
            </ReturnTotalProvider>
    );
}

export default App;
