import React from 'react'
import Card from  './Card'



const ContentSection3=()=>{
    return(
    
<section className="contact bg-success ">
   <div className="container ">
        <h2 className="text-white"> We love new friends!</h2>
    </div>

    <div className="row">
        
    <Card title="Basketball" subtitle="Basketball is a lovely game" buttonText="Basketball"/>        
    <Card title="Cricket" subtitle="Cricket is a lovely game" buttonText="Cricket"/>        
    <Card title="Hockey" subtitle="Hockey is a lovely game" buttonText="Hockey"/>     
       
    
    
    
    
    </div>
</section>
);

}


export default ContentSection3;