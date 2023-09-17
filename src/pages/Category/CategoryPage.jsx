import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants'
import { useGetAllCompilationQuery } from '../../services/audioplayer'

export const CategoryPage = () => {
  const params = useParams()

  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )

  const { data: compilation } = useGetAllCompilationQuery()
  console.log(category)

  return (
    <div>
      <h1>Category Page {category.name}</h1>
    </div>
  )
}
