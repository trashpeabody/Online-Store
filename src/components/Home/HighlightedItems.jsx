import { Button } from '../Generics/Button'
import speaker1 from '../../assets/home/desktop/image-speaker-zx9.png'
import earphones from '../../assets/home/desktop/image-earphones-yx1.jpg'

export const HighlightedItems = () => {
  return (
    <section className='container highlighted-items'>
      <div>
        <img src={speaker1} />
        <div className='highlighted-items__text'>
          <h1>ZX9 SPEAKER</h1>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Button kind={4} />
        </div>
      </div>
      <div>
        <div className='highlighted-items__text'>
          <h4>ZX7 SPEAKER</h4>
          <Button kind={2} />
        </div>
      </div>
      <div>
        <img src={earphones} />
        <div className='highlighted-items__text'>
          <h4>YX1 EARPHONES</h4>
          <Button kind={2} />
        </div>
      </div>
    </section>
  )
}
