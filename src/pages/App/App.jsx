import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AddRoutePage from '../NewRoutePage/NewRoutePage';
import RoutesPage from '../../pages/RoutesPage/RoutesPage';
import NavBar from '../../components/NavBar/NavBar';
import RouteDetailPage from '../../pages/RouteDetailPage/RouteDetailPage';
import * as routesAPI from '../../utilities/routes-api';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [route, setRoute] = useState([]);
  

  useEffect(function() {
    async function getRoutes() {
      const route = await routesAPI.getAll();
      setRoute(route);
    }
    getRoutes();
  }, []);

  async function handleAddRoute(newRouteData) {
    const newRoute = await routesAPI.create(newRouteData);
    setRoute([...route, newRoute]);
  }

  return (
    <main className="App">
      { user ? 
          <>
            <NavBar  user={user} setUser={setUser} />
            <Switch>
              <Route path="/routes">
                <RoutesPage routes={route}/>
              </Route>
              <Route path="/add">
                <AddRoutePage handleAddRoute={handleAddRoute} />
              </Route>
              <Route exact path="/details" >
                <RouteDetailPage /> 
              </Route>
              <Redirect to="/orders" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

