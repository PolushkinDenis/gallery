import './App.css';
import { useRoutes } from './routes'

const App = () => {
  const routes = useRoutes()

  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
