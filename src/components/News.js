import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import propTypes from 'prop-types'



export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'technology'
  }
  static propTypes ={
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }

  constructor(){
      super();   
      console.log("Hello I am a constructor from News component");
      this.state={
        articles: [],
        loading:false,
        page:1,
        totalResults:0
      };
       }

       async updateNews(){
         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles, 
          totalResults: parsedData.totalResults,
          loading: false})
        
       }
      async componentDidMount(){
        // console.log("cdm");
        // const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({articles:parsedData.articles, 
        //   totalResults: parsedData.totalResults,
        //   loading: false
        
        // })
        this.updateNews();

      }
       handlePrevClick=  async ()=>{
        //  if (this.state.page <= 1) return; // prevent invalid page
        //  const page = this.state.page - 1;
        //  this.setState({ loading: true });
        //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        //  this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);
       
        //   this.setState({
        //     page: this.state.page - 1,
        //     articles:parsedData.articles,
        //     loading: false
        //   })
         this.setState({page:this.state.page-1});
         this.updateNews();

        }
        handleNextClick=  async()=>{
        //   if(this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSize)){
        //     return ;
        //   }
        //     const newPage = this.state.page + 1;
        //   {
        //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //   this.setState({loading:true});
        //    let data = await fetch(url);
        //    let parsedData = await data.json()
           
        //    console.log(parsedData);
       
        //   this.setState({
        //     page: newPage,
        //     articles:parsedData.articles,
        //     loading: false
        //   });
        //   };
          this.setState({page:this.state.page+1});
          this.updateNews();
      }
     
 
  render() {
     console.log("render");

    return (
      <div className= "container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading &&< Spinner/>}
       
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title ={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage||element.image||"https://media.istockphoto.com/id/1264354259/photo/young-boy-playing-in-a-flag-football-game.jpg?s=612x612&w=0&k=20&c=ftLl-_yYfZj_YygO_rTcBxxSCNjY-pxe7Km-l2mUzEA="} newsurl={element.url} author={element.author} pubDate={element.pubDate}/>
              </div>
            })}
         
        </div>
        <div className="container d-flex justify-content-between" >
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
