import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import SignUp from "./components/signUp";
import SignIn from "./components/signin";
import { Component } from "react";
import usersService from "./services/usersService";
import SignOut from "./components/signOut";
import BusinessSignUp from "./components/businessSignUp";
import CreateCard from "./components/createCard";
import ProtecredRoute from "./components/common/protectedRouter";
import MyCards from "./components/myCards";
import EditCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      user: usersService.getUser(),
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="app d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>

        <main className="container flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/create-card"
              element={
                <ProtecredRoute bizOnly>
                  <CreateCard />
                </ProtecredRoute>
              }
            />
            <Route
              path="/my-cards/edit/:id"
              element={
                <ProtecredRoute bizOnly>
                  <EditCard />
                </ProtecredRoute>
              }
            />
            <Route
              path="/my-cards/delete/:id"
              element={
                <ProtecredRoute bizOnly>
                  <DeleteCard />
                </ProtecredRoute>
              }
            />
            <Route
              path="/my-cards"
              element={
                <ProtecredRoute bizOnly>
                  <MyCards />
                </ProtecredRoute>
              }
            />

            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="/biz-signup" element={<BusinessSignUp />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
