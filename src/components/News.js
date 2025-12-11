import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  

  constructor(){
      super();
      console.log("Hello I am a constructor from News component");
      this.state={
        articles: [],
        loading:false,
        page:1
      };
       }
      async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&pageSiz=15";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles, totalArticles: parsedData.totalResults})

      }
       handlePrevClick=  async ()=>{
         let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page - 1}&pageSiz=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
       
          this.setState({
            page: this.state.page - 1,
            articles:parsedData.articles
          })

        }
        handleNextClick=  async()=>{
          if(this.state.page +1 >Math.ceil(this.state.totalResults/15)){

          }
           else
            {
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page + 1}&pageSiz=15`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
       
          this.setState({
            page: this.state.page +1,
            articles:parsedData.articles
          })
        }
        }
     
 
  render() {
     console.log("render");

    return (
      <div className= "container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
       
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
              <Newsitem  title ={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage||element.image||"https://media.istockphoto.com/id/1264354259/photo/young-boy-playing-in-a-flag-football-game.jpg?s=612x612&w=0&k=20&c=ftLl-_yYfZj_YygO_rTcBxxSCNjY-pxe7Km-l2mUzEA="} newsurl={element.url}/>
              </div>
            })}
         
        </div>
        <div className="container d-flex justify-content-between" >
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
