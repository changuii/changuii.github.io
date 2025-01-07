import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../routes/Routes.tsx";

const Layout: React.FC = () => {
    return (
        <div className='h-screen w-screen'>
            <Router>
                <AppRoutes/>
            </Router>
        </div>
    )
}

export default Layout