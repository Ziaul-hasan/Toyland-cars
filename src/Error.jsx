import { Link, useRouteError } from "react-router-dom";
import img from './assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg'


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-5xl font-paytonOne font-bold">Oops!</h1>
            <p className="text-2xl font-secularOne font-medium mt-5">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl font-secularOne font-medium mt-5 text-red-600">{error?.error?.message}</p>
            <img className="w-[300px]" src={img} alt="" />
            <p className="text-5xl mt-5"><span>&#128514;</span></p>
            <p className="mt-5">
                <span className="text-2xl font-secularOne font-bold">Error: </span> <i className="text-2xl font-paytonOne">{error?.status} page {error?.statusText}</i>
            </p>
            <Link to='/'><button className="text-white bg-lime-600 px-8 py-3 rounded-lg text-xl font-medium font-secularOne mt-5">Go Back TO Home</button></Link>
        </div>
    );
}