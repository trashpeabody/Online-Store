import earphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import headphonesImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakersImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import { Category } from './Category'

export const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'headphones',
      imgSrc: headphonesImg
    },
    {
      id: 2,
      name: 'speakers',
      imgSrc: speakersImg
    },
    {
      id: 3,
      name: 'earphones',
      imgSrc: earphonesImg
    }
  ]
  return (
    <section>
      <div className='container categories'>
        {
          categories.map((category) => {
            return <Category key={category.id} category={category} />
          })
        }
      </div>
    </section>
  )
}
