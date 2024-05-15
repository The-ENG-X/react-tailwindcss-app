// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Main from './components/Main';


// function App() {
//   return (
//     <Router>
//       <Header />
//         <Routes>
//           <Route path="/" exact component={<Home/>} />
//           <Route path="/about" component={<About/>} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/login" component={Login} />
//         </Routes>
//       <Footer />
//     </Router>
//   );
// }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Home /> } >
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Contact /> } />
      <Route path='/about' element={ <About /> } />
      </Route>
    )
  );




  function App() {
    return (
            <>
                {/* <Header /> */}
                <RouterProvider router={router} />
                <Footer />
            </>
          );
    }

export default App;
