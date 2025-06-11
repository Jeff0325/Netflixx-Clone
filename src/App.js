import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './banner';
import Nav from './nav';
import Modal from './modal';

function App() {
  return (
    <div className="App">
      <Modal/>
      <Nav/>
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
