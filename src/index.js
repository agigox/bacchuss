import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from 'components/Error';
import Repartition from 'components/content/Repartition';
import Synthesis from 'components/content/Synthesis';
import Human from 'components/content/Human';
import Material from 'components/content/Material';
import Consequences from 'components/content/Consequences';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Synthesis />,
      },
      {
        path: "repartition/",
        element: <Repartition />,
      },
      {
        path: "human/",
        element: <Human />,
      },
      {
        path: "material/",
        element: <Material />,
      },
      {
        path: "consequences/",
        element: <Consequences />,
      },
      
    ],
  },
]);
root.render(
    <RouterProvider router={router} />
);
