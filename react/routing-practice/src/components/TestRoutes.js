import {Link, useParams} from "react-router-dom";

const TestRoutes = (props)=>{
    
    const {input, color, bgColor} = useParams();
    
    return(
        <div>
            {
                // When the input is not a number:
                isNaN(input)?
                <p style={
                    color?
                    {color: color, backgroundColor: bgColor}
                    :null
                }>
                    This is your word: {input}</p>
                :
                // When the input is a number:
                <p>
                    This is your number: {input}
                </p>
            }
            <h1>Welcome!</h1>
            <Link to={"/"}>Go to home</Link>
        </div>
    )
}

export default TestRoutes;