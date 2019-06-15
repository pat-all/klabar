import React from 'react';

/* Components -----> */
import MainHeader from "./components/header";
import MainPart from "./components/main-part";
/* <----- Components */

/* Icon library -----> */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faUserPlus);
/* <----- Icon library */

const App = () => {
  return (
   <div>
     <MainHeader/>
     <MainPart/>
   </div>
  );
}

export default App;
