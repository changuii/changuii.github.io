import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../routes/Routes.tsx";
import Navigator from "../components/Navigator.tsx";

const Layout: React.FC = () => {
    return (
        <div className='h-screen w-screen'>
            <Router>
                <Navigator />
                <AppRoutes/>
            </Router>
        </div>
    )
}

export default Layout