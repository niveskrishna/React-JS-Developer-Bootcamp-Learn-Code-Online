import React from 'react'
import Navigation from './Navigation'
import  Footer from './Footer'
import ContentSection1 from  './ContentSection1'
import ContentSection2 from  './ContentSection2'
import ContentSection3 from  './ContentSection3'

const app=()=>{
 return( 
 <div>
 <Navigation/>
 <ContentSection1/>
 <ContentSection2/>
 <ContentSection3/>
 <Footer/>
 </div>
 );
}

export default app;