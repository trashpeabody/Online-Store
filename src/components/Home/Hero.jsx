import { Button } from '../generics/Button'

export const Hero = () => (
  <section className='hero'>
    <div className='container hero__container'>
      <div className='hero__text'>
        <span className='overline'>NEW PRODUCT</span>
        <h1>XX99 Mark II Headphones</h1>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Button kind={1} />
      </div>
    </div>

  </section>
)
