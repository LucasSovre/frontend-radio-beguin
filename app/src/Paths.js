import React from 'react';
import { Route,Routes, BrowserRouter} from "react-router-dom";
import Main from './containers/main';

export default function Paths(){

    return(
        <BrowserRouter>
          <Routes>
                <Route exact path="" element={<Main />} />
          </Routes>
        </BrowserRouter>
      )

}
