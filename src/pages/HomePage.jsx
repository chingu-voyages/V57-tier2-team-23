import { Button } from "../components/ui/button";
import HomeImage from "../assets/images/home_image.png";
import GitHubLogo from "../assets/images/github.png";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center flex-col">
        <img src={HomeImage} alt="Home" className="w-96 h-60 mb-4" />
        <p className="text-center mb-4">
          No more lost pull requests. See what’s<br/>
          open, what’s done, and who’s reviewing<br/>
          <span className="font-bold">-all in one simple dashboard built for</span><br/>
          <span className="font-bold"> your team’s GitHub repos.</span>
        </p>

        <div className="w-full flex justify-center">
          <Button className="bg-green-500 hover:cursor-pointer w-40">
            Get Started!
          </Button>
        </div>

        <div>
          <buttn>
            <img src={GitHubLogo} alt="GitHub Logo" className="w-6 h-6 mt-4 mx-auto hover:cursor-pointer" />
          </buttn>
        </div>
      </div>
    </div>
  );
};

export default HomePage;