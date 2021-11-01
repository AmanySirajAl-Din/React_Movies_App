import React from 'react'
import { useLocation, useParams } from 'react-router';

export default function MovieDetails(props) {
    // console.log(props.match.params)
    const params = useParams();
    const location = useLocation();
    // {id : 12345}
    console.log(params);
    console.log(location);
    return (
        <div>
            Movie details
        </div>
    )
}