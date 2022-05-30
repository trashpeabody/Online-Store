type Props = {
  kind: 1 | 2 | 3
}

export const Button = ({ kind }: Props) => {
  return (
    <button className={`button--${kind}`}>See product</button>
  )
}
