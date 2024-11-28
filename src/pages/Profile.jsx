import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase/configfirebase";
import { onAuthStateChanged } from "firebase/auth";

// Import the profile image
import profileImage from "../assets/profile.png";

const Profile = () => {
  const [username, setUsername] = useState("Loading...");
  const [email, setEmail] = useState("Loading...");
  const [bio, setBio] = useState(
    "This is a short bio about the user. It can include hobbies, interests, or a personal tagline!"
  );

  useEffect(() => {
    const profileName = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName || "No Username");
        setEmail(user.email || "No Email");
      }
    });

    return () => profileName();
  }, []);

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Banner Section */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
        <div className="absolute -bottom-16 left-6">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-32 h-32 border-4 border-white"
          />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="p-6 pt-16">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{username}</h1>
            <p className="text-gray-500">@{email}</p>
            <p className="mt-4 text-gray-600">{bio}</p>
          </div>
          <button className="btn btn-primary">Follow</button>
        </div>
      </div>


      
    </div>
  );
};

export default Profile;
