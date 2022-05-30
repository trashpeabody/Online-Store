import { Button } from '../Generics/Button'

export const Category = ({ category }) => {
  return (
    <div>
      <img src={category.imgSrc} />
      <h6>{category.name}</h6>
      <Button kind={3} />
    </div>
  )
}
