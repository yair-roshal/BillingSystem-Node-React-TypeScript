import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateClient } from 'components';
import { EditClient } from 'components';
import { ClientList } from 'components';
import { Navbar } from 'components';

export const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(props: any) => <CreateClient {...props} />}
                />
                <Route
                    exact
                    path="/create-client"
                    component={(props: any) => <CreateClient {...props} />}
                />
                <Route
                    exact
                    path="/edit-client/:id"
                    component={(props: any) => <EditClient {...props} />}
                />
                <Route
                    exact
                    path="/client-list"
                    component={(props: any) => <ClientList {...props} />}
                />
            </Switch>
        </Router>
    );
};
