import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
import { useMemo } from "react"

export const HeroePage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo( () => getHeroById(id), [id] )

  const onReturn = () => {
    navigate(-1)
  }

  if (!hero) {
    console.log('Heroe no existe')
    return <Navigate to="/dc" />
  }

  return (
    <div className="row mt-5">
        <div className="col-4">
          <img 
            src={`/assets/heroes/${ id }.jpg `}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
            <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
            <li className="list-group-item"> <b>First Appearence:</b> {hero.first_appearance} </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{ hero.characters }</p>

          <button className="btn btn-primary" onClick={ onReturn }>
            Regresar
          </button>

        </div>
    </div>
  )
}
