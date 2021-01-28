import RouteListItem from '../RouteListItem/RouteListItem';

export default function RouteList({ routes, handleDeleteRoute }) {
    
    const showRoutes = routes.map(item => 
        <RouteListItem key={item._id} route={item} handleDeleteRoute={handleDeleteRoute}/>
    );
    return (
        <main>
            {showRoutes}
        </main>
    )
}