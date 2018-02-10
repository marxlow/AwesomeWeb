import React from 'react';

const Search = ({ value, onChange, children }) => {
    // Do something
    return (
        <form>
            {children} <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </form>
    )
}

export default Search;