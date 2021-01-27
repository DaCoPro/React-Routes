import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import RoutesPage from '../../pages/RoutesPage/RoutesPage';
import NavBar from '../../components/NavBar/NavBar';
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

  return (
    <main className="App">
      { user ? 
          <>
            <NavBar  user={user} setUser={setUser} />
            <Switch>
              <Route path="/routes">
                <RoutesPage routes={route}/>
              </Route>
              <Route path="/orders/new">
                {/* <RoutesPage /> */}
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

