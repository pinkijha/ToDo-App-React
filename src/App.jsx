import Home from "./components/Home"
import {Provider} from "react-redux";
import store from './utils/store' ;


function App() {

  return (
    <>
    <Provider store={store}>
      <div>
        <Home placeholder='Add a task'  />
       </div>
       </Provider>
    </>
  )
}

export default App
