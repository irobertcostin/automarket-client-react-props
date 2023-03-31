import Home from "./components/Home"
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react'
import Data from "./services/Api";
import AddCar from "./components/AddCar";

// const declaration
export const  HOME_PAGE = "home";

export const  ADD_PAGE = "add";

export const  EDIT_PAGE = "edit";







function App() {
  let [page, setPage] = useState(HOME_PAGE);



    return (
    <>
      <Navbar setPage={setPage}/>

      {(() => {
          switch (page) {
            case HOME_PAGE:
              return <Home />;
            

            case ADD_PAGE:
            return <AddCar />;



            default:
              return <Home />;
          }
        })()}
    </>
  );
}

export default App;


