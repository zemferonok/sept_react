import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import {
    HomePage,
    NotFoundPage,
    PostCommentsPage,
    PostPage,
    PostsPage,
    UserPage,
    UserPostsPage,
    UsersPage
} from "./pages";

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>

                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/*'} element={<NotFoundPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserPage/>}>
                            <Route path={'posts'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;