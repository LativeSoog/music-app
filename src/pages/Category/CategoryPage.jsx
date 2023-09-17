import { useParams } from 'react-router-dom'
import {
  useGetAllCompilationQuery,
  useGetCompilationIdQuery,
} from '../../services/audioplayer'
import { CategorySectionList } from '../../components/Category/CategorySectionList'

export const CategoryPage = () => {
  const params = useParams()
  const { data: allCategories } = useGetAllCompilationQuery()

  const currentCategories = allCategories?.find(
    (category) => category.id === Number(params.id),
  )

  const { data: compilationId } = useGetCompilationIdQuery(1)

  return <CategorySectionList params={params} />
}
