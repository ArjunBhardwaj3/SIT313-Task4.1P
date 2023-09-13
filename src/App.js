import './App.css';
import CenteredBar from './Components/CenteredBar';
import Header from './Components/Header';
import FeaturedArticle from './Components/FeaturedAricle';
import FeaturedTutorial from './Components/FeaturedTutorial';
import Mail from './Components/mail';
import About from './Components/about';
function App() {
  const imageUrls = [
    'https://i.ytimg.com/vi/eyCEe_XIGj8/maxresdefault.jpg',
    'https://th.bing.com/th/id/R.05c080faf84d6ef254191df22f4a7ac7?rik=WYtQ1QQhpEH95w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fCpRGNUC.jpg&ehk=mgNLokPW%2bv%2b4VNR6nAoUUHBNEh91Rdtum%2bzTxuTe19s%3d&risl=&pid=ImgRaw&r=0',
    'https://wallpapercave.com/wp/bvJq0ra.jpg'
  ];
  const titles = ['JS6', 'React Router', 'Express'];
  const descriptions = [
    ' Description - JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015',
    ' Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the clients browser',
    'Hooks are functions that let you “hook into” React state and lifecycle features from function components'
  ];

  const authors = ['Joseph', 'John', 'Boris'];
  const ratings = [4.5, 3.8, 5.0];

  const imageUrl = [
    'https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.-pJjsQF3nXlDpw8rtxaLFAHaE7?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.ebHun71AbHqOLiu5f_756QHaE8?pid=ImgDet&rs=1'
  ];
  const title = ['Network ', 'Full stack', 'IOT '];
  const description = [
    'Fastest between ants',
    'It belongs to SIT313',
    'Its of SIT210'
  ];
  const author = ['madhu', 'Rohan', 'Allen'];
  const rating = [4.5, 3.8, 5.0];

  return (
    <div className="App">

  <CenteredBar/>
  <Header/>
  <h1> FEATURED ARTICLE</h1>
  <FeaturedArticle
        imageUrls={imageUrls}
        titles={titles}
        descriptions={descriptions}
        authors={authors}
        ratings={ratings}
      />

<button >See all Articles</button>

  <h1> FEATURED TUTORIAL</h1>
 <FeaturedTutorial
        imageUrls={imageUrl}
        titles={title}
        descriptions={description}
        authors={author}
        ratings={rating}
      /> 
<button >See all Tutorials</button>
  <Mail/>
  <About/>
 
    </div>
  );
}

export default App;
