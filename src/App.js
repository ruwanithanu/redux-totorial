import React from "react";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import DashboardPage from '../component/DashboardPage'
import PostsPage from '../component/PostsPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Navigate to="/" />
            </Routes>   
        </BrowserRouter>
    )
}

export default App
