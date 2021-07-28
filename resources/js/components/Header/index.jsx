import './Header.scss'

const Header = ({ text, headingLevel, className }) => {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

  return (
    <Title className={`landing-page-header ${className}`}> {text} </Title>
  )
}

export default Header