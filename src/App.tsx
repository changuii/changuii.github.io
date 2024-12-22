import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/Routes.tsx";

function App() {

  return (
    <div className='h-screen w-screen'>
        <Router>
            <AppRoutes />
        </Router>
    </div>
  )
}

export default App
