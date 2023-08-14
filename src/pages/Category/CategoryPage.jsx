import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants'

export const CategoryPage = () => {
  const params = useParams()

  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )

  return (
    <div>
      <h1>Category Page {category.name}</h1>
    </div>
  )
}
