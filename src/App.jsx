import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Important from "./components/Important";
import Completed from "./components/Completed";
import Pending from "./components/Pending";
import All from "./components/All";
import TaskContainer from "./components/TaskContainer";
import { UtilsContextProvider } from "./utils/UtilsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UtilsContextProvider>
          <Provider store={store}>
            <Routes>
              {/* Parent Route */}
              <Route path="/" element={<Home />}>
                {/* Child Routes */}
                <Route index element={<All />} /> {/* Default Route */}
                <Route path="myday" element={<TaskContainer />} />
                <Route path="all" element={<All />} />
                <Route path="important" element={<Important />} />
                <Route path="completed" element={<Completed />} />
                <Route path="pending" element={<Pending />} />
              </Route>
            </Routes>
          </Provider>
        </UtilsContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
