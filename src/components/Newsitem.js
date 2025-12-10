import React, { Component } from 'react'

export class Newsitem extends Component {
  


  render() {
  let  {title, description , imageurl, newsurl}= this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageurl} className="card-img-top" alt="News"
        onError={(e) => { 
          e.target.onerror = null;
      e.target.src = "https://via.placeholder.com/400"; 
  }}/>
        <div className="card-body">
        <h5 className="card-title">{ title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
