import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddNewuser from "./pages/AddNewUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Updateuser from "./pages/UpdateUser";

function App() {
  return (
    <div className="App">
      <h1 className="App">MERN USERS APP</h1>
      {/* <Dashboard/>
        <AddNewuser/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/addNewUser" element={<AddNewuser />} />
          <Route path="/updateuser/:userId" element={<Updateuser />} />
          <Route
            path="*"
            element={
              <>
                <h1 style={{ color: "red" }}>
                  Error 404! The page you are looking for does not exist
                </h1>
                <button>Back to home</button>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
