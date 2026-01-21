
import { useEffect, useState } from 'react'
import './App.css'
import { Film } from "lucide-react";
import SearchBar from './Components/SearchBar'
import MovieList from './Components/MovieList'

const API_KEY = import.meta.env.VITE_OMDB_API_KEY

export default function App() {
  const [searchTerm, setSearchTerm] = useState("horror")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const trimmed = searchTerm.trim()

  useEffect(() => {
    if (!trimmed) {
      setMovies([])
      setError("")
      setLoading(false)
      return
    }

    if (!API_KEY) {
      setMovies([])
      setLoading(false)
      setError("Missing OMDb API key.")
      return
    }

    const controller = new AbortController()

    async function fetchMovies() {
      try {
        setLoading(true)
        setError("")

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(trimmed)}`,
          { signal: controller.signal }
        )
        const data = await res.json()

        if (data.Response === "False") {
          setMovies([]);
          setError(data.Error || "No results.")
          return;
        }

        setMovies(data.Search || [])
      } catch (err) {
        if (err?.name !== "AbortError") setError("Failed to fetch movies");
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
    return () => controller.abort()
  }, [trimmed])

  return (
    <div className="py-4 py-sm-5">
      <div className="container">

        <div className="glass rounded-4 p-3 p-sm-4 mb-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="brand-badge glass text-light">
              <Film size={22} />
            </div>
            <div>
              <h1 className="h3 mb-0 text-light">Movie Search</h1>
              <div className="muted small">OMDb search with Bootstrap UI</div>
            </div>
          </div>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>


        {error ? (
          <div className="alert alert-danger glass border-0" role="alert">
            <strong>Oops:</strong> {error}
          </div>
        ) : null}

        {!error && !loading && trimmed && movies.length === 0 ? (
          <div className="glass rounded-4 p-4 mb-3">
            <div className="h5 mb-1">No results</div>
            <div className="muted">
              Try searching something else (e.g., Inception, Dune, Spider-Man).
            </div>
          </div>
        ) : null}

        <MovieList movies={movies} loading={loading} />
      </div>
    </div>
  )
}