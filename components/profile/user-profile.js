import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

import { getSession} from "next-auth/client";
import { useEffect, useState } from 'react';
//import { User } from "@nextui-org/react";

function UserProfile() {
  
  const [isLoading, setIsloading]= useState(true);

  useEffect(() => {
    getSession().then(session =>{
        if(!session){
            window.location.href = '/auth';
        }else{
            setIsloading(false);
        }
    })
  },[]);

  if(isLoading){
    return <p className={classes.profile}>Loading ...</p>;
  }


  return (
    <section className={classes.profile}>
      {/* <User
      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      
      bordered
    /> */}
      <ProfileForm />
    </section>
  );
}

export default UserProfile;