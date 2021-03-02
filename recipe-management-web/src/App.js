import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "./components/common/PageNotFound";
import RecipiesPage from "./components/recipies/RecipiesPage";
import ManageRecipe from "./components/recipies/ManageRecipe";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <ToastContainer autoClose={3000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/recipe/:id" component={ManageRecipe} />
        <Route path="/recipe" component={ManageRecipe} />
        <Route path="/recipies" component={RecipiesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
