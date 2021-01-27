import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import RoutesPage from '../../pages/RoutesPage/RoutesPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? 
          <>
            <NavBar  user={user} setUser={setUser} />
            <Switch>
              <Route path="/orders/new">
                <NewOrderPage />
              </Route>
              <Route path="/orders">
                <RoutesPage />
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

