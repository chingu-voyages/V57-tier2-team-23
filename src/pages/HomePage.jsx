import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import HomeImage from "../assets/images/home_image.png";
import GitHubLogo from "../assets/images/github.png";

const HomePage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/lookup"); 
  };
  const handleRepoLink = () => {
    window.open("https://github.com/chingu-voyages/V57-tier2-team-23", "_blank");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center flex-col">
        <img src={HomeImage} alt="Home" className="w-96 h-60" />
        <p className="text-center mb-4">
          No more lost pull requests. See what’s<br/>
          open, what’s done, and who’s reviewing<br/>
          <span className="font-bold">-all in one simple dashboard built for</span><br/>
          <span className="font-bold"> your team’s GitHub repos.</span>
        </p>

        <div className="w-full flex justify-center">
          <Button className="bg-green-500 hover:cursor-pointer w-40" onClick={handleGetStarted}>
            Get Started!
          </Button>
        </div>

        <div className="w-full h-20 mt-5 mb-5 flex justify-center items-center">
          <button className="h-15 w-15 mt-10 hover:cursor-pointer" onClick={handleRepoLink}>
            <img src={GitHubLogo} alt="GitHub Logo"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;