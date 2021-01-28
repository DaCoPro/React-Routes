import { Link } from "react-router-dom";
import './RouteListItem.css'

export default function RouteListItem({ route }) {
    return (
        
        <div className="RouteListItem">
            <h2>{route.name}</h2>
            
            <Link to={{
                pathname: "/details",
                state: { route }
            }}>Details</Link>
        </div>
        
    )
}

