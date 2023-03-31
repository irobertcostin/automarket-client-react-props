import Home from "./components/Home"
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react'
import Data from "./services/Api";

// const declaration
let HOME_PAGE = "home";

let ADD_PAGE = "add";

let EDIT_PAGE = "edit";







function App() {

  let [page, setPage] = useState(HOME_PAGE);





  return (
    <>
      <Navbar />

      {(() => {
          switch (page) {
            case HOME_PAGE:
              return <Home />;

            case ADD_PAGE:

            default:
              return <Home />;
          }
        })()}
    </>
  );
}

export default App;


