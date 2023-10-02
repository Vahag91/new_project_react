import Header from "../Header";
import NewsCard from "../NewsCard/NewsCard";

function App() {

const cardData = [
  {title: "Test word", text: "Here is frash news", img: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA"},
  {title: "Test word", text: "Here is frash news", img: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA"},
  {title: "Test word", text: "Here is frash news", img: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA"},
  {title: "Test word", text: "Here is frash news", img: "https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA"},
]


  return (
    <div className="bg-dark">
      <Header />
     <NewsCard cardData={cardData}/>
    </div>

  );


}

export default App