import AdminPage from "./AdminPage";
import AllowMicrophone from "./AllowMicrophone";
import Jitsi from "./Jitsi";
import ShowChoices from "./ShowChoices";
import UserIntro from "./UserIntro";
import YeshIcon from "./YeshIcon";
import VideoPoage from "./VideoPage";
import { useQueryState } from "use-location-state";
import ShareTest from "./ShareTest";
const ChoosePage = () => {
  const [role] = useQueryState("role", "Customer");
  const [screen] = useQueryState("page", "");
  switch (screen) {
    case "ShowChoices":
    case "choices":
      return <ShowChoices />;
    case "video":
      return <VideoPoage />;
    case "share":
      return <ShareTest />;
    default:
      switch (role) {
        case "yesh":
          return <AdminPage />;
        default:
          return <UserIntro />;
      }
  }
};
export default ChoosePage;
