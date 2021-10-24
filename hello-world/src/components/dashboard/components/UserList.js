import axios from 'axios';
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function UserList() {
    // TODO: replace this url with graphQL/api url
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = React.useState(null);

    // similar to ngOnInit
    React.useEffect(() => {
        // simuilate slow api to do a loader
        setTimeout(() => {
            axios.get(baseURL).then((response) => {
                setUsers(response.data);
            });
        }, 2000);
    }, []);

    if (!users) return (
        <div className="spinner">
            <i className="pi pi-spin pi-spinner" style={{ 'fontSize': '2em' }}></i>
        </div>
    );

    // TODO: when table row is clicked, bubble up event to dashboard and load /details and pass user info into it.
    function viewDetails(user) {
        console.log(user);
    }

    return (

        <DataTable value={users} stripedRows>
            <Column field="id" header="ID" sortable></Column>
            <Column field="name" header="Name" sortable></Column>
            <Column field="username" header="Username" sortable></Column>
            <Column field="email" header="Email" sortable></Column>
        </DataTable>
    );
}
