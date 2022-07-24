import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
