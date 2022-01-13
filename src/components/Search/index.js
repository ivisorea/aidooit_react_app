// import React, { useState } from 'react'
// import { Icon } from './styles.js'



export const Search = () => {
    // const [search, setSearch] = useState('')
    return (
        <>
          <div class="col-md-8 col-lg-6 col-xl-5 mx-auto p-5 mt-5">
                <div class="input-group input-group-lg">
                    <input 
                        className="form-control border rounded-pill shadow-sm" 
                        type="search" 
                        placeholder="Search"
                        // onChange={(e) => setSearch(e.target.value)}
                        id="example-search-input"/>
                    <button 
                        className="btn ms-n5 btn-outline-primary border-0" 
                        type="button">
                            <i class="fas fa-search " style={
                                {
                                    color: '#f4ba15',
                                    fontSize: '1.5rem'
                                }
                                                
                            }></i>
                    </button>
                </div>
        </div>
      

        </>
    )
}


