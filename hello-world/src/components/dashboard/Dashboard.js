import { Route, Switch, useRouteMatch } from "react-router";
import { UserDetails } from "./components/UserDetails";
import UserList from "./components/UserList"
import { Menubar } from 'primereact/menubar';

const Dashboard = () => {
    let match = useRouteMatch();

    const container = {
        width: '1000px',
        margin: '0 auto'
    }

    const items = [        
        {
           label:'Dashboard',
           icon:'pi pi-fw pi-home'
        },
        {
           label:'About',
           icon:'pi pi-fw pi-users'
        }
     ];

    return (
        <div style={container}>
            <Menubar model={items}/>
            <h1>Dashboard</h1>
            <Switch>                
                <Route path={`${match.path}/details`}>
                    <UserDetails />
                </Route>
                <Route path={`${match.path}`}>
                    <UserList />
                </Route>
            </Switch>
        </div>
    );
}

export default Dashboard
