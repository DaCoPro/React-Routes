import React from "react";
import { useLocation } from "react-router-dom";

export default function RouteDetailPage() {
    const {
        state: { route },
    } = useLocation();

    return (
        <main>
            <h1>Route Detail Page</h1>
            <h2>{route.name}</h2>
            <h4>{route.grade}</h4>
            <h4>{route.description}</h4>
        </main>
    );
}