import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import About from "./components/About/About.jsx"
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';
import Error404 from "./components/Error404/Error404"
import Favorites from "./components/Favorites/Favorites"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css'

function App() {

  const [characters, setCharacters] = useState([]);

   async function onSearch(id){
      const URL = "http://localhost:3001/rickandmorty/character/";

      try{
         const response = await axios(URL + id)
         const {data} = response;

         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
         
      } catch(error){
         console.log(error)
      }
   }

   const onClose = id => {
      setCharacters(characters.filter(character => 
         character.id !== Number(id)))
   };

   const location = useLocation();

   const [access, setAccess] = useState(false);

   const navigate = useNavigate();

   async function login(userData){
      const {email, password} = userData
      const URL = 'http://localhost:3001/rickandmorty/login/';
      
      try{
         const response = await axios(URL + `?email=${email}&password=${password}`)
         const {access} = response.data;
         setAccess(response.data)
         access && navigate("/home")
      } catch(error){
         console.log(error)
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);


  return (
    <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} characters={characters}/>}
         <Routes>
            <Route exact path="/" element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
      </div>
  )
}

export default App
