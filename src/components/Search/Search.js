import React, { useState } from 'react'
import'./Search.css'


const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <>
       
        
          <div class="col-md-8 col-lg-6 col-xl-5 mx-auto">
                <div class="input-group input-group-lg">
                    <input 
                        className="form-control border rounded-pill" 
                        type="search" 
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        id="example-search-input"/>
                    <button 
                        className="btn ms-n5 btn-outline-primary border-0" 
                        type="button">
                            <i class="fas fa-search "></i>
                    </button>
                </div>
        </div>
      

        </>
    )
}

export default Search
