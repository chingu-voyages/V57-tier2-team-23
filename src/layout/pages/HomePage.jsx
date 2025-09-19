import { Button } from "../../components/ui/button";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1>PR Status Board</h1>
      <div className="flex justify-center flex-col">
        <Button className="bg-gray-500 hover:cursor-pointer">
          Get Started!
        </Button>
      </div>
    </div>
  );
};

export default HomePage;