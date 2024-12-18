import Home from "./components/Home"
import {Provider} from "react-redux";
import store from './utils/store' ;
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
      <div>
        <Home  />
       </div>
       </Provider>
       </BrowserRouter>
    </>
  )
}

export default App
