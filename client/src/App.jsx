import { Routes, Route } from 'react-router-dom';

import Navigation from 'routes/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route index element={<Navigation />}></Route>
    </Routes>
  );
};

export default App;
