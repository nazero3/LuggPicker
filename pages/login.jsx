import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export const login = () => {
    const {data: session} = useSession();
  if (session){
    return (<div>
                <p>welcome, {session.user.email}</p>
                <button onClick={() => signOut()}>sign out</button>
            </div>)

  }
  else{
    return (
        <div>
            <p>not signed in</p>
            <button onClick={()=>signIn()}>sign in</button>
        </div>
      )
  }
}
export default login;