import React, { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops, i did it again...</h1>
            <p>{JSON.stringify(error)}</p>
        </div>
    )
}