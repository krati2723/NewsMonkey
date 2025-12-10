import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles= [
        {
            "id": "8bc6287c2865821f75a731ee4a1f54f3",
            "title": "IND vs SA, 2nd T20I: Mullanpur Pitch Report, Maharaja Yadavindra Singh International Stadium Stats and Records",
            "description": "India will take on South Africa in the second T20I on December 11. The clash will take place at Maharaja Yadavindra Singh International Cricket Stadium in Mullanpur.",
            "content": "The 2nd T20I between India and South Africa is set to take place at the brand new Maharaja Yadavindra Singh International Cricket Stadium in Mullanpur, New Chandigarh. Following a decisive victory in the series opener, India carry a 1-0 lead and stro... [2312 chars]",
            "url": "https://crickettimes.com/2025/12/ind-vs-sa-2nd-t20i-mullanpur-pitch-report-maharaja-yadavindra-singh-international-stadium-stats-and-records/",
            "image": "https://crickettimes.com/wp-content/uploads/2025/12/IND-vs-SA-2nd-T20I-Maharaja-Yadavindra-Singh-International-Cricket-Stadium-Stat-and-Pitch-Report.webp",
            "publishedAt": "2025-12-10T13:30:44Z",
            "lang": "en",
            "source": {
                "id": "e6852af88b14da52f21289b8885ebe7c",
                "name": "The Cricket Times",
                "url": "https://crickettimes.com",
                "country": "us"
            }
        },
        {
            "id": "6a126dcf8fb73179a7e185f4a86a0f76",
            "title": "IND vs SA Weather Report, Pitch Report Of New Chandigarh- 2nd T20I, South Africa Tour of India 2025",
            "description": "In this article, we determine the IND vs SA Weather Report and Pitch Report of Maharaja Yadavindra Singh International Cricket Stadium for the 2nd T20I of the South Africa tour of India 2025",
            "content": "India will face South Africa in the second of the five-match T20I series. In this article, we determine the IND vs SA Weather Report and Pitch Report of Maharaja Yadavindra Singh International Cricket Stadium for the 2nd T20I of the South Africa tour... [2483 chars]",
            "url": "https://cricketaddictor.com/cricket-news/ind-vs-sa-weather-report-pitch-report-of-new-chandigarh-2nd-t20i-south-africa-tour-of-india-2025-327676/",
            "image": "https://cricketaddictor.com/images/posts/2025/IND-vs-SA-2-.jpg?q=80",
            "publishedAt": "2025-12-10T12:30:34Z",
            "lang": "en",
            "source": {
                "id": "5376e1233292409145123e276ce44e97",
                "name": "Cricket Addictor",
                "url": "https://cricketaddictor.com",
                "country": "us"
            }
        },
        {
            "id": "4d02b1a17d3079cc324da94e8e42ea0d",
            "title": "Unknown Indian Names Who Will Shock IPL Auction Table",
            "description": "With the IPL 2026 mini auction just days away, the Board of Control for Cricket in India (BCCI) unveiled the complete roster of players set to go under the hammer on December 16 in Abu Dhabi.",
            "content": "With the IPL 2026 mini auction just days away, the Board of Control for Cricket in India (BCCI) unveiled the complete roster of players set to go under the hammer on December 16 in Abu Dhabi. All ten teams will enter the event looking to address the ... [2944 chars]",
            "url": "https://cricketaddictor.com/cricket-news/unknown-indian-names-who-will-shock-ipl-auction-table-328093/",
            "image": "https://cricketaddictor.com/images/posts/2025/IPL-Auction-Karthik-Sharma.jpg?q=80",
            "publishedAt": "2025-12-10T11:59:45Z",
            "lang": "en",
            "source": {
                "id": "5376e1233292409145123e276ce44e97",
                "name": "Cricket Addictor",
                "url": "https://cricketaddictor.com",
                "country": "us"
            }
        }
    ]

  constructor(){
      super();
      console.log("Hello I am a constructor from News component");
      this.state={
        articles: this.articles,
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
              <Newsitem  title ={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage||element.image||"https://via.placeholder.com/400"} newsurl={element.url}/>
              </div>
            })}
         
        </div>
      </div>
    )
  }
}

export default News
