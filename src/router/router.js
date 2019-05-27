import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import needTodos from '../hookModels/needTodos/index.js';
import finishedtodos from '../hookModels/finishedTodos/index.js';
import StoreContext ,{store} from '../store/store.js';


function Router () {
    return (
       
            <BrowserRouter>
                <Route path='/' exact={true} component={needTodos}></Route>
                <Route path='/finishedTodos' exact={true} component={finishedtodos}></Route>
            </BrowserRouter>

    );
}
export default Router;