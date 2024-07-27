
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages
import Login from '../Pages/login/Login';
import Signup from '../Pages/signup/Signup';
import Home from '../Pages/home/Home';
import Profile from '../Pages/profile/profile';
import ChatBox from '../Pages/chatbox/ChatBox';


//components......
import Nav from '../components/nav/Nav';
import LeftBar from '../components/leftbar/LeftBar';
import RightBar from '../components/rightbar/RightBar';


export default function LayOut() {
    
    //Feed......
   
    const Feed = () => {
        return (
            <>
            <Nav />
                <main>
                    <LeftBar />

                <div className="container">
                 <Outlet />
                    </div>
                    <RightBar />
                </main>
            </>
        )

    }
    
    //Router.......
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Feed/> ,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                  {
                    path: '/profile/:id',
                    element: <Profile />
                },
                    {
                    path: '/chatbox/:id',
                    element: <ChatBox/>
                },
                
                
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Signup />
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}
