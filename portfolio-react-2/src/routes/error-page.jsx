import React from "react"
import { useRouteError} from "react-router-dom";
import catIMG from "../images/cat-page-error.jpg"

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="content_wrapper">
            <h1>Oops!</h1>
            <img src={catIMG} alt="Picture of cute cat peering out of a tube"></img>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}