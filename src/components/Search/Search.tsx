import searchIcon from 'assets/search.svg'
import { Input } from '@mui/material'
import './Search.scss'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="search">
      <Input
        type="search"
        disableUnderline={true}
        placeholder="I'm looking for..."
        className="search-input"
      />
      <img src={searchIcon} alt="" className="search-icon" />
    </div>
  )
}
export default Search
