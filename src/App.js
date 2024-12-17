import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrapedList from './components/ScrapedList';
import ScrapeUrl from './components/ScrapeUrl';
import ScrapedDetail from './components/ScrapedDetail';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {

  const [progress, setProgress] = useState(0)

  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="App">
      <Router>
        <Navbar onSearch={handleSearch} />
        <LoadingBar height={3} color='red' progress={progress} />
        <Routes>
          <Route path="/" element={<ScrapeUrl setProgress={setProgress} />} />
          <Route path='/scrapedList' element={ <ScrapedList setProgress={setProgress} searchQuery={searchQuery} /> } />
          <Route path="/scraped_data/:id" element={<ScrapedDetail setProgress={setProgress} />} />
        </Routes>         
        <Footer />
      </Router>
    </div>
  );
}

export default App;
