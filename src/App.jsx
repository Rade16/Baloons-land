import WelcomePage from "./screens/WelcomePage/WelcomePage";
import AboutPage from "./screens/AboutPage/AboutPage";
import MinigamesPage from "./screens/MinigamesPage/MinigamesPage";
import NftPage from "./screens/NftPage/NftPage";
import LinksPage from "./screens/LinksPage/LinksPage";
import RoadmapPage from "./screens/RoadmapPage/RoadmapPage";
import { ScrollProvider } from "./routes/ScrollProvider";

function App() {
  return (
    <>
      <ScrollProvider>
        <WelcomePage />
        <AboutPage />
        <RoadmapPage />
        <MinigamesPage />
        <NftPage />
        <LinksPage />
      </ScrollProvider>
    </>
  );
}

export default App;
