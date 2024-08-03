import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    return (
    <div>
        <h1>Oops</h1>
        <h3>Unidentified Route - Error 1</h3>
        <h4>{error.status} ... {error.statusText}  </h4>
    </div>
)};
export default Error;