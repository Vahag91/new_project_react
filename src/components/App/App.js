import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Header'
import NewsCard from '../NewsCard';
import FullNews from '../FullNews';

function App() {

  const [selectedNews, setSelectedNews] = useState(null)

  const [isClosed, setIsClosed] = useState(true)

  const handleClick = (newsItem) => {
    if(selectedNews && newsItem.id === selectedNews.id){
      setIsClosed((prevState)=> !prevState)
    } else {
      setSelectedNews(newsItem)
      setIsClosed(false)
    }
  }


  

  const news = [
    {
      id: 1,
      title: '1 News Title',
      text: '1 News Content',
      image: '/Static/images/nkar1.jpeg',
      fullText: 'news full text 1',
      pubDate: '17.03.2022',
    },
    {
      id: 2,
      title: '2 News Title',
      text: '2 News Content',
      image: '/images/nkar1.jpeg',
      fullText: 'news full text 2',
      pubDate: '25.02.2021',
    },
    {
      id: 3,
      title: '3 News Title',
      text: '3 News Content',
      image: '/Images/nkar1.jpeg',
      fullText: 'news full text 2',
      pubDate: '10.03.2023',
    }
  ]
  
  return (
    <div>
      <Header />
      <Container className='mt-5 mb-5'>
        <h1>My Personal blog</h1>
        <p>For example, here are two grid layouts that apply to every device and viewport, from xs to xxl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</p>
      </Container>
      <Container>
        <Row>
          {
            news.map((n) => {
              return (
                <Col lg={3} md={4} sm={6} xs={12} key={n.id}>
                  <NewsCard data={n} handleClick={handleClick} />
                </Col>
              )
            })
          }
        </Row>

        
        {
          selectedNews ? <Row><FullNews selectedNews={selectedNews} /></Row> : null
        }
      </Container>
      <footer className='bg-dark text-white text-center p-3'>
        <Container>
          &copy; 2023 News protal. All Rights Reserved
        </Container>
      </footer>
    </div>
  )
}

export default App;