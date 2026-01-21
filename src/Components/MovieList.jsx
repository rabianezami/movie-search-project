import MovieCard from "./MovieCard";
import SkeletonGrid from "./SkeletonGrid";

export default function MovieList({ movies, loading }) {
    if (loading) return <SkeletonGrid />

    if (!movies?.length) return null

    return (
        <div className="row g-3 g-md-4">
            {movies.map((movie) => (
                <div className="col-12 col-sm-6 col-lg-4" key={movie.imdbID}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    )
}