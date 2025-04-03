/* AppRoutes.jsx */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from '../components/Root/Root';
import Home from '../components/Home/Home';
import Coin from '../components/Coin/Coin';
import Favorites from '../components/Favorites/Favorites';

function AppRoutes() {
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="coin/:id" element={<Coin />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </Router>
    );
    }

export default AppRoutes;