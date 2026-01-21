import { Search, X } from "lucide-react"
import SuggestedMovies from "./SuggestedMovies"
export default function SearchBar({ searchTerm, setSearchTerm }) {
    const hsaText = searchTerm?.trim().lenght > 0

    return (
        <div className="glass rounded-4 p-3">
            <div className="input-group">
                <span className="input-group-text bg-transparent text-light border-0">
                    <Search size={18} />
                </span>
                <input
                    type="text"
                    className="form-control bg-transparent text-light border-0"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                    placeholder="Search movie..."
                />

                {hsaText ? (
                    <button
                        className="btn btn-sm btn-soft"
                        type="button"
                        onClick={() => { setSearchTerm("") }}
                    >
                        <X size={16} />
                    </button>
                ) : null}
            </div>

            <SuggestedMovies setSearchTerm={setSearchTerm} />
        </div>
    )
}