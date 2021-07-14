import React, { useState } from 'react';
import Dropdown from './Dropdown';
import axios from 'axios';
import SearchForm from './SearchForm';
const App = () => {
    const [res,setResults]=useState([]);
    const [loader,showLoader]=useState(false)
    const handleSearch= async (query)=>{
        const response=await axios.get("https://en.wikipedia.org/w/api.php",{
            params:
            {
                action:"query",
                list:"search",
                srsearch:`${query}`,
                format:"json",
                origin:"*"
            }
        })
        
        setResults(response.data.query.search);
        showLoader(true)
    }

    return (
        <React.Fragment>
        <div className="ui segment" style={{height:"40%"}}>
            <h1>wiki-api</h1>
            <SearchForm onSearch={handleSearch}/>
            
        </div>
        <div className="ui segment" style={{width:"99%",overflow:"auto",minHeight:"400px",maxHeight:"calc(100% - 200px)"}}>
                <div className="ui styled accordion" style={{width:"99%",overflow:"auto"}}>
                    {(!loader && res.length===0 )? <div className="ui active inverted dimmer">
                                     <div className="ui text loader">Loading</div>
                                     </div>:<Dropdown results={res}/>}
                         
                 </div>
        </div>
      

        </React.Fragment>
      );
}
 
export default App;