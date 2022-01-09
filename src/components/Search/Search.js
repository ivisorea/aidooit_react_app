import React, { useState } from 'react'


const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <>
        <form className="form-inline">
            <input 
                className="form-control mr-sm-2"   
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                />
            
        </form>

        <div className="input-group">
            <input 
                className="form-control border-end-0 border rounded-pill" 
                type="text" 
                onChange={(e) => setSearch(e.target.value)}
                id="example-search-input"/>
            <span className="input-group-append">
                <button className="btn btn-outline-secondary bg-white border-start-0 border rounded-pill ms-n3" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </span>
     </div>

        </>
    )
}

export default Search
