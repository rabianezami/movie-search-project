import { Calendar, Star } from "lucide-react";

export default function MovieCard({ movie }) {
    const poster =
        movie?.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://png.pngtree.com/png-vector/20221125/ourlarge/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg"

    return (
        <article className="movie-card glass rounded-4 h-100">
            <div className="poster-wrap">
                <img className="poster" src={poster} alt={movie?.Title || "Movie poster"} loading="lazy" />
                <div className="poster-badges">
                    <span className="badge badge-soft rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
                        <Calendar size={14} />
                        {movie?.Year || "—"}
                    </span>
                    <span className="badge badge-soft rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
                        <Star size={14} />
                        IMDb
                    </span>
                </div>
            </div>

            <div className="p-3 p-md-4 text-light">
                <h3 className="h5 mb-1">{movie?.Title || "Untitled"}</h3>
                <div className="muted small mb-3">
                    {movie?.Type ? movie.Type.toUpperCase() : "MOVIE"}
                </div>

                <a
                    className="btn btn-soft w-100 rounded-3 text-light"
                    href={`https://www.imdb.com/title/${movie.imdbID}/`}
                    target="_blank"
                    rel="noreferrer"
                >
                    View on IMDb
                </a>
            </div>
        </article>
    )
}