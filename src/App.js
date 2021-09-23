import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReportsTwo, ReportsOne, ReportsThree } from "./pages/Reports";
import DashBoard from "./pages/DashBoard";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/DashBoard" exact component={DashBoard} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
      </Switch>
    </Router>
  );
}

export default App;
