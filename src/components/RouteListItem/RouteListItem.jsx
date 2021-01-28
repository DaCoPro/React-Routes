import './RouteListItem.css'

export default function RouteListItem({ route }) {
    return (
        <div className="RouteListItem">
            <h1>{route.name}</h1>
            <h2>{route.grade}</h2>
            <h4>{route.description}</h4>
        </div>
    )
}