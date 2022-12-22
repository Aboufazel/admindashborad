
import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Root from "./routes/Root";

function App() {
    return (
        <ThemeProvider dir={"rtl"}>
            <Root/>
        </ThemeProvider>
    );
}

export default App;
