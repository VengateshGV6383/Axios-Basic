import React from 'react';
import axios from 'axios';
interface Props{
    setres:(val:Array<Object>)=>void;
}
const SearchForm = (props:Props) => {
    const getData=async (query:String)=>{
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
        
        props.setres(response.data.query?.search);
        }
        
    const debouncer= (fn:Function,delay:number):Function=>{
            let timer:any;
            return(val:string)=>{
                clearTimeout(timer);   
                timer=setTimeout(()=>{
                        fn(val)
                },delay)   
            }
           
    }
  const handleOnchange=debouncer(getData,2000)
    
    return (  
        <div className="ui form">
            <div className="field">
                <label htmlFor="search"><h3>Type what you want to search</h3></label>
                <input type="text" name="search" onChange={(e)=>handleOnchange(e.target.value)}/>
            </div>
        </div>
    );
}
 
export default SearchForm;