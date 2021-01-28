import { Link } from "react-router-dom";
import './RouteListItem.css'

export default function RouteListItem({ route, handleDeleteRoute}) {
    return (
        
        <div className="RouteListItem">
            <h2>{route.name}</h2>
            
            <Link to={{
                pathname: "/details",
                state: { route }
            }}>Details</Link>
            <Link to={{
                pathname: "/update",
                state: { route }
            }}>Update</Link>
            <button
                className='btn btn-xs btn-danger margin-left-10'
                onClick={() => handleDeleteRoute(route._id)}
                >
                DELETE
            </button>
        </div>
        
    )
}

