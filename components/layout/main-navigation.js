import Link from "next/link";

import classes from './main-navigation.module.css';

function MainNavigation(){
    return(
        <header className={classes.header}>
            <Link   href='/'>                
                    <div className={classes.logo}>Next auth</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link  href='/auth'>Login</Link>
                    </li>
                    <li>
                        <Link  href='/profile'>Profile</Link>
                    </li>
                    <li>
                        <button>Log out</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;