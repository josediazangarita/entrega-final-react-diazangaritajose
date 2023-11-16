import { mFetch } from "../../Helpers/mFetch"

export const ItemListContainer = ({ greeting }) => {
  // Llamada a mi promesa
  mFetch()
    .then(result => console.log(result)) 
    .catch(err => console.log(err))

  return (
    <div>
      <h2 className="text-center"> { greeting } </h2>
    </div>
  )
}
