import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import UserSubscription from './Components/UserSubscription/UserSubscription';
import Feed from './Components/Discover/Feed';
import Discover from './Components/Discover/Discover';
import TraderLounge from './Components/TraderLounge/TraderLounge';
import Login from './Components/Login/LoginPage';
import HomeBody from './Components/Home/HomeBody';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import AddFund from './Components/AddFund';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoneyInvest from './Components/MoneyInvest';
import ViewAll from "./Components/ViewAll/ViewAll"
import Settings from "./Components/Settings"
import General from "./Components/General"
import Account from './Components/Account';
import MyPlanScreen from './Components/MyPlanScreen';
// import { Settings } from '';


function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <UserSubscription/> */}
      {/* <Feed/> */}
      {/* <Discover/> */}
      {/* <TraderLounge/> */}

      <BrowserRouter>
      <Routes> 
        <Route exact
        path="/"
        element={
        <Home/>
         } 
         /> 
        <Route exact path="/Feed" element={<Feed />} />
        <Route exact path="/Login" element={<Login />} />
        {/* <Navbar/> */}
        <Route exact path="/DashBoard" element={<HomeBody />} />
        <Route exact path="/Discover" element={<Feed />} />
        <Route exact path="/Subscriptions" element={<UserSubscription />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/DepositFunds" element={<AddFund />} />
        {/* Route exact path="/DepositFunds" element={<AddFund />} /> */}
        <Route exact path="/TraderLounge" element={<TraderLounge />} />
        <Route exact path="/CopyTrade" element={<MoneyInvest/>} />
        <Route exact path="/ViewAll" element={<ViewAll/>} />
        <Route exact path="/Settings" element={<Settings/>} />
        <Route exact path="/General" element={<General/>} />
        <Route exact path="/Account" element={<Account/>} />

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;