import React from 'react'

const NewsItem = (props)=>  {
  


  
  let  {title, description , imageurl, newsurl,author,pubDate}= props;
    return (
      <div className='my-3'>
        <div className="card" >
        <img src={imageurl} className="card-img-top" alt="News"
        onError={(e) => { 
          e.target.onerror = null;
      e.target.src = "https://media.istockphoto.com/id/1264354259/photo/young-boy-playing-in-a-flag-football-game.jpg?s=612x612&w=0&k=20&c=ftLl-_yYfZj_YygO_rTcBxxSCNjY-pxe7Km-l2mUzEA="; 
  }}/>
        <div className="card-body">
        <h5 className="card-title">{ title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {pubDate}</small></p>
        <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }


export default NewsItem
