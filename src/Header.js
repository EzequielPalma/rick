import BotoneraNav from "./Botonera";
import logo from "./logoRick.svg";

export default function HeaderRick () {

    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <BotoneraNav/>
        </header>
    );
}


