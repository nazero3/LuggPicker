import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

// import { getSession} from "next-auth/client";
// import { useEffect, useState } from 'react';

function UserProfile() {
  
//   const [isLoading, setIsloading]= useState(true);

//   useEffect(() => {
//     getSession().then(session =>{
//         if(!session){
//             window.location.href = '/auth';
//         }else{
//             setIsloading(false);
//         }
//     })
//   },[]);

//   if(isLoading){
//     return <p className={classes.profile}>Loading ...</p>;
//   }


  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;