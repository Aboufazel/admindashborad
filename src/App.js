import './App.css';
import Root from "./routes/Root";
import GiveContextProvider from "./Context/GiveId";
import ReturnTotalProvider from "./Context/ReturnTotalAccount";
import theme from "./themes/theme";
import {ThemeProvider} from "@mui/material";
import {CacheProvider} from '@emotion/react';
import cacheRtl from "./themes/CacheRtl";


function App() {



    return (
        <ReturnTotalProvider>
            <GiveContextProvider>
                <ThemeProvider theme={theme} dir={"rtl"}>
                    <CacheProvider value={cacheRtl}>
                        <Root/>
                    </CacheProvider>;
                </ThemeProvider>
            </GiveContextProvider>
        </ReturnTotalProvider>
    );
}

export default App;
