import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeholder, classname }) => (
  <input
    type="search"
    placeholder={placeholder}
    className={classname}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
