import {Link} from "react-router-dom";
import {useParams} from "react-router";

const String = (props)=>{
    const {string} = useParams();
    if (isNaN(string)) {
        return <div>
        <h1>Your word or phrase is: {string}</h1>
        <Link to={"/"}>Go home</Link>
    </div>;
    }
    return(
        "Not a word or phrase!"
    )
}

export default String;