import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { useForm } from "../../hooks/useForm"
import { getHerosByName } from "../helpers/getHerosByName"
import { HeroCard } from "../components/HeroCard"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heroes = getHerosByName(q)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()

    // if( searchText.trim().lenght <= 1 ) return

    navigate(`?q=${searchText}`)

  }

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4 className="mt-3">Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>

        </div>

        <div className="col-7">
          <h4 className="mt-3">Results</h4>
          <hr />

          {
            (q === '')
              ? <div className="alert alert-primary">Search a Hero</div>
              : (heroes.length === 0)
                && <div className="alert alert-danger">There's no results for {q}</div>
          }

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>

      </div>
    </>
  )
}
