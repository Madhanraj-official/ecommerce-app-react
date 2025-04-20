import {Link} from "react-router-dom";
import {ReactIcon} from "../assets";
import {SearchBarWidget} from "../widgets";
import {headerComponentStyles} from "../styles/components";

export function HeaderComponent() {
    return (
        <header className={headerComponentStyles.header}>
            <Link to={'/'} ><ReactIcon/> logo </Link>
            <form>
                <SearchBarWidget/>

            </form>
            <Link to={'/settings'} >settings<ReactIcon/></Link>
            <Link to={'/'} >root<ReactIcon/></Link>

        </header>
    );
}