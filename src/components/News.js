import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  

  constructor(){
      super();
      console.log("Hello I am a constructor from News component");
      this.state={
        articles: [],
        loading:false
      };
       }
      async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a31d8b20b8af482c9b00630c7b0ac70d";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})

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
      </div>
    )
  }
}

export default News
