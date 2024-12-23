import AdminInfo from "./components/AdminInfo"
import UserInfo from "./components/UserInfo"
import { AdminInfoList,Info } from "./Types";


const App = () => {

  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <section>
      <AdminInfo admin={admin} />
      <UserInfo user={user}/>
    </section>
  )
}

export default App