import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

const App =() =>{
  return(
    <>
    <Profile
    name={userData.username}
    tag={userData.tag}
    />
    </>
  )
}
export default App;