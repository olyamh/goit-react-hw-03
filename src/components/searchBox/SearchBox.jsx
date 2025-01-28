

const SearchBox =({value, onChange}) => {
    return (
        <div>
            <label>
                
                
            <input value={value} onChange={onChange} type="text" placeholder="search"></input></label>
        </div>
    )

}

export default SearchBox;