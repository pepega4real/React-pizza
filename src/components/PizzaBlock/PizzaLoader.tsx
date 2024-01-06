import ContentLoader from 'react-content-loader'

const PizzaLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={459}
      viewBox='0 0 280 459'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'>
      <rect x='202' y='94' rx='0' ry='0' width='1' height='1' />
      <circle cx='130' cy='130' r='130' />
      <rect x='20' y='284' rx='7' ry='7' width='227' height='31' />
      <rect x='20' y='337' rx='22' ry='22' width='227' height='73' />
      <rect x='125' y='426' rx='25' ry='25' width='119' height='32' />
      <rect x='30' y='430' rx='0' ry='0' width='80' height='24' />
    </ContentLoader>
  )
}

export default PizzaLoader
