import React, {useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './spinner'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props) => {
  const [articles , setArticles] = useState([])
  const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    //document.title = `${this.Capitalize(props.category)} - NewsMonkey`;
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

 

 const updateNews = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${page}&pageSize=${props.pageSize}`;
    //this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);

  }

  useEffect(()=> {
    // console.log("cdm");
     
    updateNews();

  }, []);
  const handlePrevClick = async () => {
    //  if (page <= 1) return; // prevent invalid page
    //  const page = page - 1;
    //  this.setState({ loading: true });
    //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    //  this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);

    //   this.setState({
    //     page: page - 1,
    //     articles:parsedData.articles,
    //     loading: false
    //   })
   
    setPage(page-1)
    updateNews();

  }
  const handleNextClick = async () => {
    //   if(page +1 >Math.ceil(this.state.totalResults/props.pageSize)){
    //     return ;
    //   }
    //     const newPage = page + 1;
    //   {
    //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${this.state.page+1}&pageSize=${props.pageSize}`;
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
    
    setPage(page+1)
    updateNews();
  }
   const fetchMoreData = async () => {
   setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a31d8b20b8af482c9b00630c7b0ac70d&page=${page}&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat( parsedData.articles))
    setTotalResults( parsedData.totalResults)
    

  };


 
    console.log("render");

    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top   {Capitalize(props.category)} Headlines </h1>
        {loading &&< Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          


          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage || element.image || "https://media.istockphoto.com/id/1264354259/photo/young-boy-playing-in-a-flag-football-game.jpg?s=612x612&w=0&k=20&c=ftLl-_yYfZj_YygO_rTcBxxSCNjY-pxe7Km-l2mUzEA="} newsurl={element.url} author={element.author} pubDate={element.pubDate} />
              </div>
            })}

            </div>
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between" >
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  
}
News.defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'technology'
  }
  News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
  }
export default News
