import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Level from "./components/Level/Level";
import QuizEasy from "./components/Quiz/QuizEasy";
import QuizHard from "./components/Quiz/QuizHard";

const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/level" component={Level} />
        <Route path="/quiz/easy" component={QuizEasy} />
        <Route path="/quiz/hard" component={QuizHard} />
      </Switch>
    </div>
  );
};

export default App;
