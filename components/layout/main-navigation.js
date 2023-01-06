import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
//import { Navbar, Button, Text } from "@nextui-org/react";
import classes from './main-navigation.module.css';

function MainNavigation() {
  const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    
    <header className={classes.header}>
      <Link href='/'>
        
          <div className={classes.logo}>LuggPicker</div>
        
      </Link>
      {/* <Link href='/tryingImage'>
        upload Image tings
      </Link> */}
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {(
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
          { session &&(
            <li>
              <Link href='/new-luggage'>Add Luggage</Link>
            </li>
          )}
          { session &&(
            <li>
              <Link href='/changepassword'>Change Password</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
          
        </ul>
      </nav>
    </header>
    
  );
}

export default MainNavigation;