import {Error404, HomePage, SettingsPage} from "./pages";
import {BrowserRouter, Route , Routes} from "react-router-dom";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/settings" element={<SettingsPage/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>

    );
}