import React from 'react';

import RouteList from '../../components/RouteList/RouteList';

export default function RoutesPage({ routes, handleDeleteRoute }) {
    return (
    <main className="RoutesPage">
        <h1>Routes</h1>
        <div>
            <RouteList routes={routes} handleDeleteRoute={handleDeleteRoute}/> 
        </div>
    </main>
    );
}