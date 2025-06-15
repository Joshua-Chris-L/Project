import "./App.css";
import BulletinStory from "./components/BulletinStory";
import Divider from "./components/Divider";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";
import NewsList from "./components/NewsList";
import MustRead from "./components/MustRead";
import BusiSport from "./components/BusiSport";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Divider />
      <NewsCard />
      <NewsList />
      <BulletinStory />
      <MustRead />
      <BusiSport />
      <Footer />
    </>
  );
}

export default App;
