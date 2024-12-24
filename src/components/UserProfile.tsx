import { useState } from "react";

const UserProfile = () => {
    interface profileShape {
        name: string;
        age:number;
        email:string;
    }
    const [profile, setProfile] = useState<profileShape>({
        name: "",
        age:0,
        email:"",
    });

    const updateName=(name:string)=>{
        setProfile((prevProfile:profileShape)=>({...prevProfile,name}));
    }
    const updateAge=(age:string)=>{
        setProfile((prevProfile:profileShape)=>({...prevProfile,age:Number(age)}));
    }
    const updateEmail=(email:string)=>{
        setProfile((prevProfile:profileShape)=>({...prevProfile,email}));
    }
  return (
    <div>
    <h2>User Profile</h2>
    <input
      type="text"
      placeholder="Name"
      value={profile.name}
      onChange={(e) => updateName(e.target.value)}
    />
    <input
      type="number"
      placeholder="Age"
      value={profile.age > 0 ? profile.age : ""}
      onChange={(e) => updateAge(e.target.value)}
    />
    <input
      type="email"
      placeholder="Email"
      value={profile.email}
      onChange={(e) => updateEmail(e.target.value)}
    />
    <h3>Profile Summary:</h3>
    <p>Name: {profile.name}</p>
    <p>Age: {profile.age}</p>
    <p>Email: {profile.email}</p>
  </div>
  )
}

export default UserProfile