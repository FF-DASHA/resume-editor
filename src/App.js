import React, { useState } from 'react';
import styles from './style.module.css';
import UserEdit from './user/user-edit/user-edit';
import UserProfile from './user/user-profile/user-profile';

function App() {
  const [userData, setUserData] = useState({
    experience: [],
    education: [],
    skills: [],
  });

  const handleAddExperience = (newExperience) => {
    setUserData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, newExperience],
    }));
  };

  const handleAddEducation = (newEducation) => {
    setUserData((prevData) => ({
      ...prevData,
      education: [...prevData.education, newEducation],
    }));
  };

  const handleAddSkills = (newSkills) => {
    setUserData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, newSkills],
    }));
  };

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <UserEdit 
          propsExperience={handleAddExperience} 
          propsEducation={handleAddEducation} 
          propsSkills={handleAddSkills} 
        />
        <UserProfile userData={userData} />
      </div>
    </div>
  );
}

export default App;
