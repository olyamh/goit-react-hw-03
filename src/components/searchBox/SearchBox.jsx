import s from './SearchBox.module.css';
import clsx from 'clsx'

const SearchBox =({value, onChange}) => {
    return (
        <div className={clsx(s.searchBoxWrapper)}>
            <label className={clsx(s.lable)}>
                Search contact
                
                
            <input value={value} onChange={onChange} type="text" className={clsx(s.input)} placeholder="search by name"></input></label>
        </div>
    )

}

export default SearchBox;