import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router';
import './styles/styles.scss';

export const App = () => <RouterProvider router={router} />;
