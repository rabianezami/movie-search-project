
export default function SuggestedMovies({ setSearchTerm }) {
    const SuggestedMovies = ["horror", "romantic", "Spider-Man", "comedy"]

    return (
        <div className="mt-3 d-flex flex-wrap gap-2">
            {SuggestedMovies.map((data) => (
                <button
                    key={data}
                    type="button"
                    className="btn btn-sm btn-soft rounded-pill text-light border px-3"
                    onClick={setSearchTerm}
                >
                    {data}
                </button>
            ))}
        </div>
    )
}