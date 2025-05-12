import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./gloabelContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './pages/App.jsx'
 import Sponsor from './pages/Sponsor.jsx'
 import Om from './pages/Tak.jsx'
 import Tak from './pages/Om.jsx'
 import './App.scss';
// import PropertyDetails from './pages/propertydetails.jsx'
// import Favorites from './pages/Favorites.jsx'
// import Agents from './pages/Agents.jsx'
// import Kontakt from "./pages/kontakt.jsx";
// import AgentDetails from "./pages/agentdeatilss.jsx";
// import FavoritesPage from "./componets/AgentFavorites.jsx";
// import AgentsList from "./componets/agentslist.jsx";
// import Agenterne from "./pages/agenter.jsx";
// import Favoritesagent from "./pages/Favorites.jsx";
// import FavoritesAgents from "./componets/AgentFavorites.jsx";
// import Favoriteagents from "./pages/favoritecorker.jsx";
// import Login from "./pages/login.jsx";



// import Details from "./details.jsx";
// import Search from "./search.jsx";
// import Searchpage from "./searchpage.jsx";
// import Cast from "./cast-details.jsx";
// import Genre from "./genre-details.jsx";
// import GenreListFetch from "./genre-list.jsx";




//router hvor vi putter komponenter ind og laver flere sider
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
   },
{
   path: "/Om",
     element: <Om />
   },
   {
     path: "/Sponsor",
    element: <Sponsor />
   },
   {
     path: "/Tak",
     element: <Tak />
  }
  // {
  //   path: "/Agents",
  //   element: <Agents />
  // },  {
  //   path: "/kontakt",
  //   element: <Kontakt />
  // },{
  //   path: "/Agents/:id",
  //   element: <AgentDetails />
  // },  {
  //   path: "/favoriter",
  //   element: <Favoriteagents/>
  // },
  // {
  //   path: "/login",
  //   element: <Login />, // Tilføj login-siden her
  // }
  
  
  // {
  //   //vi definere vores details side path 
  //   path: "/details/:id",
  //   element: <Details />
  // },
  // {

  //   path: "/search",
  //   element: <Search />
  // }
  // ,
  // {

  //   path: "/searchpage",
  //   element: <Searchpage />
  // },


  // {

  //   path: "/cast-details/:media_type/:castId",
  //   element: <Cast />
  // }, {

  //   path: "/genre-details/:genreId",
  //   element: <Genre />
  // },
  // {

  //   path: "/genre-list/",
  //   element: <GenreListFetch />
  // }
])
//vi laver et state som vi ka gemme i vores context
const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(



  //vi putter vores context rundt om vores projekt
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>


)
