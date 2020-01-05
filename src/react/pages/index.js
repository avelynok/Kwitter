import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed";
import CreateUser from "./CreateUser";
import HomePage from "./HomePage";
import PrivateMessage from "./PrivateMessage";


export default {
  Home: { path: "/", component: Home },
  HomePage: { path: "/homepage", component: HomePage },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed", component: MessageFeed },
  CreateUser: { path: "/createuser", component: CreateUser },
  PrivateMessage: { path: "/PrivateMessage/:user/:user", component: PrivateMessage },
  NotFound: { path: "*", component: NotFound }
};
