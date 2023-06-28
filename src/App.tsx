import { DragNDrop } from "./Study/DragNDrop";
import { Todo } from "./Study/ToDo";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ZustandApp } from "./Study/ZustandApp";
import { ZustandAppTwo } from "./Study/ZustandAppTwo/src/Pages/Home";
import { ReduxToolkit } from "./Study/ReduxToolkit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/todo" element={<Todo />} />
      <Route path="/drag-drop" element={<DragNDrop />} />
      <Route path="/zustand-app" element={<ZustandApp />} />
      <Route path="/zustand-two" element={<ZustandAppTwo />} />
      <Route path="/redux-toolkit" element={<ReduxToolkit />} />
    </>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
