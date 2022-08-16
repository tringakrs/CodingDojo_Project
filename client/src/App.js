import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PetList from './components/PetList';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import Pet from './components/Pet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PetList />} path="/" />
          <Route element={<PetList />} path="/pets" />
          <Route element={<NewPet />} path="/pets/new" />
          <Route element={<EditPet />} path="/pets/edit/:id" />
          <Route element={<Pet />} path="/pets/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
