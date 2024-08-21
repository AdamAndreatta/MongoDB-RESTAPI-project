// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import fav from './images/android-chrome-192x192.png'
// Import Components, styles, media
import Navigation from './components/Navigation';


// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';

import CarsPage from './pages/CarsPage';
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:

// If your schema requires SHORT data input, then use the TABLE design.
import EditCarsPageTable from './pages/EditCarsPageTable.js';
import AddCarsPageTable from './pages/AddCarPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [car, setCarToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <i><img src={fav}></img></i>
            <h1>Adam Andreatta Daugherty</h1>
            <p>Portfolio website representing use of M.E.R.N. technologies</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path='/pages/TopicsPage' element={<TopicsPage/>}/>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path="/pages/CarsPage" element={<CarsPage setCar={setCarToEdit}/>} />

                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddCarsPageTable />} /> 
                    <Route path="/update" element={<EditCarsPageTable carToEdit={car} />} />

                    {/* Or these if your schema requires SHORT data input: */}
                </Routes>
              </section>
          </main>

          <footer>
            <p>Adam Andreatta Daugherty</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;