import './App.css'
import ProfileCard from './Profile/profile.jsx';
import Counter from './Counter/Counter.jsx';
import Users from './Users/Users.jsx';
import UsersList from './UsersList/UsersList.jsx'
import DataContext from './Context/DataContext.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserDetail from './UsersList/UserDetail.jsx';
import GeminiAi from './GeminiAi/GeminiAi.jsx';
import Login from './Pages/Auth/Login.jsx';
import SignUp from './Pages/Auth/signUp.jsx';
import ProtectedRoute from './Pages/Auth/ProtectedRoute.jsx';

function App() {
  return (
    <>
      {/* <ProfileCard name = "Vijay Kumar" exp = "8+ years" prfImage = "https://cdn.vectorstock.com/i/1000v/00/74/young-man-profile-vector-14770074.jpg" />  
      <ProfileCard name = "Reena" exp = "5+ years" prfImage = "https://cdn.vectorstock.com/i/1000v/26/01/young-executive-woman-profile-icon-vector-9692601.jpg" />   
       <Counter />
       <Users /> */}
       {/* <DataContext.Provider value={"Thanks for connect use how i can help you?"}>
        <UsersList />
       </DataContext.Provider> */}
       <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
            }></Route>
          <Route path='/about' element={
            <ProtectedRoute>
              <About/>
            </ProtectedRoute>
          }></Route>
          <Route path='/user-list' element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
            }></Route>
          <Route path='/user-list/:id' element={
            <ProtectedRoute>
              <UserDetail />
            </ProtectedRoute>
            }></Route>
          <Route path='/ask-question' element={
            <ProtectedRoute>
              <GeminiAi />
            </ProtectedRoute>
            }></Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;
