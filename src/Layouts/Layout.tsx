import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../routes/Routes.tsx";
import Navigator from "../components/Navigator.tsx";

const Layout: React.FC = () => {
    return (
        <Router>
            <Navigator/>
            <AppRoutes/>
        </Router>
    )
}

export default Layout