import large from '../../assets/shared/desktop/image-best-gear.jpg'
import medium from '../../assets/shared/tablet/image-best-gear.jpg'
import small from '../../assets/shared/mobile/image-best-gear.jpg'

export const AboutUs = () => {
  console.log(large, small, medium)
  return (
    <section className='container about-us'>
      <div className='about-us__container'>
        <div className='about-us__text'>
          <h2>Bringing you the <span className='orange'>best</span> audio gear</h2>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
        <picture>
          <source srcSet={small} media='(max-width: 768px)' />
          <source srcSet={medium} media='(max-width: 1023px)' />
          <img src={large} alt='Guy using headphones' />
        </picture>
      </div>
    </section>
  )
}
