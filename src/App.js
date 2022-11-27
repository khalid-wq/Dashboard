import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import "./style/darck.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <div className="app">
       <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>}/>
        <Route path="users">
        <Route index element={<List/>} />
        <Route path=":userId" element={<Single/>}/>
        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
        </Route>
        <Route path="products">
        <Route index element={<List/>} />
        <Route path=":products" element={<Single/>}/>
        <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
        </Route>
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;