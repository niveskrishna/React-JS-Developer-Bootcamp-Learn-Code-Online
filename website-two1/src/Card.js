import React from 'react'

const Card=({title="abcd",subtitle="def",buttonText="ghi"})=>{
return(
    <div className="col-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="card-img-top" alt="..."/>
                
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                        {subtitle}
                        </p>
                    <button className="btn btn-success">{buttonText}</button>
                    </div>
            </div>
        </div>
);
}

export default Card;
