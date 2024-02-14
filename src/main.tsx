import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateCurriculum from './pages/Curriculums/Create/index.tsx';
import Home from './pages/Home/index.tsx';
import CurriculumsView from './pages/Curriculums/View/index.tsx';
import EditarCurriculum from './pages/Curriculums/Edit/index.tsx';
import SingleCurriculumView from './pages/Curriculums/View/SingleCurriculumView.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'curriculums',
        children: [
          {
            index: true,
            element: <CurriculumsView/>
          },
          {
            path: ':id',
            element: <SingleCurriculumView />
          },
          {
            path: 'create',
            element: <CreateCurriculum />
          },
          {
            path: 'edit/:id',
            element: <EditarCurriculum />
          }
        ]
      },
      {
        path: 'login',
        element: <p className='text-center mt-8'>Work in progress!</p>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
