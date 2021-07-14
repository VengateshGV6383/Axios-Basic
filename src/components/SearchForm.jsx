import React, { useState } from 'react';
const SearchForm = (props) => {

    const [query,setQuery]=useState('');
    const searchQuery= (e)=>{
        e.preventDefault();
        props.onSearch(query)
    }
    
    return (  
        <form className="ui form" onSubmit={searchQuery}>
            <div className="field">
                <label htmlFor="search"><h3>Type what you want to search</h3></label>
                <input type="text" name="search" onChange={(e)=>setQuery(e.target.value)} value={query}/>
            </div>
            <button type="submit" className="ui primary button" value="Search">Search</button>

        </form>
    );
}
 
export default SearchForm;