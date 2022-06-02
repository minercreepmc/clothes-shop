import { Routes, Route } from 'react-router-dom';

import Auth from 'routes/auth/auth.component';
import Home from 'routes/home/home.component';
import Navbar from 'routes/navbar/navbar.component';

const App = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
