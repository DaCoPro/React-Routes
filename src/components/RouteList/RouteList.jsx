import RouteListItem from '../RouteListItem/RouteListItem';

export default function RouteList({ routes }) {
    
    const showRoutes = routes.map(item => 
        <RouteListItem key={item._id} route={item} />
    );
    return (
        <main>
            {showRoutes}
        </main>
    )
}