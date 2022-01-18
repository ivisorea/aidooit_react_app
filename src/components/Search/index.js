
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchItem, SearchList } from './styles';
import './styles.css';

export const Search = ({posts, categories}) => {
    const [postTitle, setPostTitle] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const onChangeHandler = (postTitle) => {
        let matches = [];
        if (postTitle.length > 0) {
            matches = posts.filter(post => post.title.toLowerCase().includes(postTitle.toLowerCase()));
        }
        console.log(matches);
        setSuggestions(matches);
        setPostTitle(postTitle);
    }

    return (
        <>
          <div class="col-md-8 col-lg-6 col-xl-5 mx-auto p-5 mt-5">
                <div class="input-group pt-4" >
                    <input style={{ height: '45px', fontSize: '1.3rem', fontStyle: 'italic'}}
                        className="form-control border shadow-sm" 
                        type="search" 
                        placeholder="Search ..."
                        value={postTitle}
                        onChange={e => onChangeHandler(e.target.value)}
                        />
                        {suggestions.length > 0 &&
                            <SearchList class="form-control border shadow-sm suggest-list">
                                {suggestions.map(suggestion => (
                                    <SearchItem key={suggestion._id} >
                                        <Link to={`/detail/${suggestion._id}`}>
                                            {suggestion.title}
                                        </Link>
                                    </SearchItem>
                                ))}
                            </SearchList>
                        }
                </div>
            </div>
        </>
    )
}


