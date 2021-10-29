import React, { useState, useEffect } from "react";

export default function AddMovie(props) {
    console.log(props);

    const [movie, setMovie] = useState({
        movie_name: "",
        release_year: "",
    });

    const [errors, setErrors] = useState({
        movie_name: null,
        release_year: null,
    });

    useEffect(() => {
        if (!errors.movie_name && !errors.release_year) {
            console.log(movie);
        }
    }, [errors]);

    const handleInputChange = (e) => {
        console.log(e.target, e.target.value);
        if (e.target.name === "movie_name") {
            setMovie({
                ...movie,
                movie_name: e.target.value,
            });
            setErrors({
                ...errors,
                movie_name:
                    e.target.value.length === 0
                        ? "This field is required"
                        : e.target.value.length < 3
                            ? "Min Length is 3"
                            : null,
            });
        }
        e.target.name === "release_year" &&
            setMovie({
                ...movie,
                release_year: e.target.value,
            });
    };

    const submitMovie = (e) => {
        e.preventDefault();
        setErrors({
            ...errors,
            movie_name:
                e.target.value.length === 0
                    ? "This field is required"
                    : e.target.value.length < 3
                        ? "Min Length is 3"
                        : null,
        });
    };

    return (
        <div className="container my-4">
            <form onSubmit={(e) => submitMovie(e)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Movie Name
                    </label>
                    <input
                        name="movie_name"
                        value={movie.movie_name}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="exampleInputEmail1"
                    />
                    {errors.movie_name && (
                        <small className="text-danger">{errors.movie_name}</small>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="release_year" className="form-label">
                        Release Year
                    </label>
                    <input
                        name="release_year"
                        value={movie.release_year}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="form-control"
                        id="release_year"
                        aria-describedby="release_year"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}
