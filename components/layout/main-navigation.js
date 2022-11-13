import Link from "next/link";
import { useSession ,signOut} from "next-auth/client";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const [session, loading] = useSession();
  //console.log(loading);
  //console.log(session);

  function logoutHandler(){
    signOut();
  }
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next auth</div>
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}

          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {session && (
            <li>
              <button onClick={logoutHandler}>Log out</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
