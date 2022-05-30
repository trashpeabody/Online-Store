export const Button = ({ kind }) => {
  return (
    <button className={`button--${kind}`}>{kind === 3 ? 'Shop' : 'See Product'}</button>
  )
}
