import Home from "./components/Home"
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react'
import Data from "./services/Api";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar"

// const declaration
export const  HOME_PAGE = "home";

export const  ADD_PAGE = "add";

export const  EDIT_PAGE = "edit";







function App() {
  let [page, setPage] = useState(HOME_PAGE);

  
  let [carId, setCarId] = useState({});




    return (
    <>
      <Navbar setPage={setPage}  page={page}/>

      {(() => {
          switch (page) {
            case HOME_PAGE:
              return <Home setPage={setPage} setCarId={setCarId} />;
            

            case ADD_PAGE:
            return <AddCar setPage={setPage}/>;

            case EDIT_PAGE:
            return <EditCar carId={carId} setPage={setPage}/>

            default:
              return <Home />;
          }
        })()}
    </>
  );
}

export default App;


