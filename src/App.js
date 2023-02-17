import { useState, useEffect } from "react";
import './App.css';
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import Prawn_curry from "./components/Prawn_curry";
import Tandoori_chicken from "./components/Tandoori_chicken";
import Poke_bowl from "./components/Poke_bowl";
import Shawrma from "./components/Shawrma";
import Tiramisu from "./components/Tiramisu";
import Jalebi from "./components/Jalebi";
import Creme_brulee from "./components/Creme_brulee";
import Rasamalai from "./components/Rasamalai";
import Footer from "./components/Footer";


import { Routes, Route} from "react-router-dom";
const contentful = require("contentful");

function App() {
  const [books, setBooks] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const SPACE_ID = process.env.REACT_APP_SPACE_ID;
  const ENVIRONMENT_ID = process.env.REACT_APP_ENVIRONMENT_ID;
  const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

  useEffect(() => {
    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: ACCESS_TOKEN,
      environment: ENVIRONMENT_ID,
    });
    client
      .getEntries()
      .then((result) => {
        setBooks(result.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <MyNavbar/>      
      <Routes>     
      <Route path="/"element={<Header books={books}/>} > </Route>
      
      <Route path="/prawn_curry" element={<Prawn_curry books={books.filter((book) => book.fields.id==1)}/>}></Route>
      <Route path="/tandoori_chicken" element={<Tandoori_chicken books={books.filter((book) => book.fields.id==2)}/>}></Route>
      <Route path="/poke_bowl" element={<Poke_bowl books={books.filter((book) => book.fields.id==3)}/>} ></Route>
      <Route path="/shawrma" element={<Shawrma books={books.filter((book) => book.fields.id==4)}/>}></Route>
      <Route path="/tiramisu" element={<Tiramisu books={books.filter((book) => book.fields.id==5)}/>}></Route>
      <Route path="/jalebi" element={<Jalebi books={books.filter((book) => book.fields.id==6)}/>}></Route>
      <Route path="/creme_brulee" element={<Creme_brulee books={books.filter((book) => book.fields.id==7)}/>} ></Route>
      <Route path="/rasamalai" element={<Rasamalai books={books.filter((book) => book.fields.id==8)}/>}></Route>
      </Routes>
      
      <Footer/>

      {/* {books.map((book) => (
        <div key={book.fields.id} className="recepies">
          {console.log(book.fields.id)}
          <h2 style={{ color: "red" }}>{book.fields.title}</h2>
          <h4>Author:{book.fields.author}</h4>
          <img
            src={book.fields.image.fields.file.url}
            alt="RecipeImage"
            style={{ width: "200px" }}
          />
          <p>Comments:{book.fields.comments}</p>
          <hr />
        </div>
      ))} */}
    
    </div>
  );
}

export default App;
