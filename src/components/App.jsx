import React, { useState } from 'react';
import Dropdown from './Dropdown';
import SearchForm from './SearchForm';
const App = () => {
    const [res,setResults]=useState([]);
    const [loader,showLoader]=useState(false)

    return (
        <React.Fragment>
        <div className="ui segment" style={{height:"40%"}}>
            <h1>wiki-api</h1>
            <SearchForm setres={(val)=>{
                setResults(val)
                showLoader(false)
            }}/>
            
        </div>
        <div className="ui segment" style={{width:"99%",overflow:"auto",minHeight:"400px",maxHeight:"calc(100% - 200px)"}}>
                <div className="ui styled accordion" style={{width:"99%",overflow:"auto"}}>
                    {(!loader && res?.length===0 && res!==" " )? <div className="ui active inverted dimmer">
                                     <div className="ui text loader">Loading</div>
                                     </div>:<Dropdown results={res}/>}
                         
                 </div>
        </div>
      

        </React.Fragment>
      );
}
 
export default App;