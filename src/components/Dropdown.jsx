import React,{useState} from 'react';
const Dropdown = (props) => {
    const [idx,setActiveIdx]=useState(0);
    const handleOnclick=(index)=>{
        setActiveIdx(index)
    }
    
    return(
        <React.Fragment>
            { props.results?.map((item,index)=>{
                
            return (
                <div onClick={()=>handleOnclick(index)} key={item.pageid}>
                    <div className={idx===index?"active title":"title"}>
                    <i className="dropdown icon"></i>
                    {item.title}
                    </div>
                    <div className={idx===index?"active content":"content"}>
                        <p dangerouslySetInnerHTML={{__html:`${item.snippet}`}}>
                        </p>
                    </div>
                </div>
               
            );
        })}
        </React.Fragment>
        );
    
}
 
export default Dropdown;