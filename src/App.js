import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utilis/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[
      {
        path:'/',
        element:<MainContainer />
      },
      {
        path:'/watch',
        element:<WatchPage />
      },
      {
        path:'/searchResult',
        element:<SearchResults />
      }
    ]
  },
    
]);

function App() {
  return (
    <div>
      <Provider store={store}>
       <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
