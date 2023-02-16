import { useState, useEffect } from "react";
import './App.css';
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import SamathaCookBook from "./components/SamathaCookBook";
import TeasviCookBook from "./components/TejasviCookBook";
import ErshiaCookBook from "./components/ErshiaCookBook";
import YesserCookBook from "./components/YesserCookBook";
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
      <Route path="/"element={<Header/>} > </Route>
      <Route path="/tejasvi" element={<TeasviCookBook books={books.filter((book) => book.fields.id==2)}/>}></Route>
      <Route path="/samatha" element={<SamathaCookBook books={books.filter((book) => book.fields.id==1)}/>}></Route>
      <Route path="/ershia" element={<ErshiaCookBook books={books.filter((book) => book.fields.id==3)}/>} ></Route>
      <Route path="/yasser" element={<YesserCookBook books={books.filter((book) => book.fields.id==4)}/>}></Route>
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
