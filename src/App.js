import './App.css';
import Root from "./routes/Root";
import GiveContextProvider from "./Context/GiveId";
import ReturnTotalProvider from "./Context/ReturnTotalAccount";
import theme from "./themes/theme";
import {ThemeProvider} from "@mui/material";
import {CacheProvider} from '@emotion/react';
import cacheRtl from "./themes/CacheRtl";
import {Provider} from "react-redux";
import {store} from "./Toolkit/Store";


function App() {



    return (
        <ReturnTotalProvider>
            <GiveContextProvider>
                <ThemeProvider theme={theme} dir={"rtl"}>
                    <CacheProvider value={cacheRtl}>
                        <Provider store = {store}>
                        <Root/>
                        </Provider>
                    </CacheProvider>;
                </ThemeProvider>
            </GiveContextProvider>
        </ReturnTotalProvider>
    );
}

export default App;
