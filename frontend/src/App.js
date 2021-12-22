import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Home from "./pages/Home"
import Users from "./pages/Users";
import UserPage from "./pages/UserPage";
import CreateUser from "./pages/CreateUser";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CreateProduct from "./pages/CreateProduct";
import { useSelector } from 'react-redux';


function App() {
  const whatState = useSelector(state => state.sidebarState);
  const { sidebarState } = whatState;
  
  return (
    <Router>
      <div className="app">
        <nav className="navbar"><Navbar /></nav>
        <main className={`main ${!sidebarState && "sidebarNoDisplay"}`}>
          {sidebarState && (
              <aside className="sidebar" id={sidebarState && "display"}><Sidebar /></aside> 
          )}
          
          <section className="pages">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/users" component={Users}/>
              <Route path="/users/:userId" component={UserPage}/>
              <Route path="/createUser" component={CreateUser}/>
              <Route exact path="/products" component={Products}/>
              <Route path="/products/:productId" component={ProductPage}/>
              <Route path="/newProduct" component={CreateProduct}/>
            </Switch>
          </section>
        </main>
        <footer className="footer">This is the footer</footer>
    </div>
    </Router>
    
    
  );
}

export default App;
