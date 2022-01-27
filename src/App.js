import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import './App.css';

function App() {
    return (
        <BrowserRouter>     {/*Put "routes" inside them*/}
            <div className='App'>
                <Routes>    {/*Put "route" inside them*/}
                    <Route path={'/'} element={<Layout/>}>              {/*Parent*/}
                        <Route path={'*'} element={<NotFoundPage/>}/>   {/*Child*/}
                        <Route index element={<HomePage/>}/> {/*Render as Default*/}
                        <Route path={'users'} element={<UsersPage/>}>
                            <Route path={':id'} element={<UserPage/>}/> {/*FUCK*/}
                        </Route>
                        <Route path={'posts'} element={<PostsPage/>}>
                            <Route path={':id'} element={<PostPage/>}/>
                        </Route>
                    </Route>
                </Routes>
                {/*path - address of URL + child URL*/}
                {/*element - what be render in this Path*/}
            </div>
        </BrowserRouter>
    );
}

export default App;