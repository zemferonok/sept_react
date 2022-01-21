import {useState} from "react";
import './App.css';
import Users from "./components/Users";
import UserPosts from "./components/UserPosts";
import UserDetails from "./components/UserDetails";

function App() {

    const [userDetails, setUserDetails] = useState(null);
    const getUserDetails = (obj) => {
        setUserDetails(obj);
        setUserIdForPosts(null);
    };

    const [userIdForPosts, setUserIdForPosts] = useState(null);
    const getUserIdForPosts = (id) => setUserIdForPosts(id);


    return (
        <div className='App'>
            <div className='wrap'>
                <Users getUserDetails={getUserDetails}/>
                {
                    userDetails && <UserDetails userDetails={userDetails} getUserIdForPosts={getUserIdForPosts}/>
                }
            </div>
            {
                userIdForPosts && <UserPosts userIdForPosts={userIdForPosts}/>
            }
        </div>
    );
}

export default App;