import React from 'react';
import Header from './componants/header.js';
import Vignette from './componants/vignette.js';
import ButtonB from './componants/buttonbottom.js';
import './App.css';

var perso = [
    {
    "title":"Javascript",
    "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "logo":"https://www.softfluent.fr/wp-content/uploads/2019/10/javascript.png",
    "link": "https://fr.wikipedia.org/wiki/JavaScript"
    },
    {
    "title":"Node JS",
    "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "logo":"https://www.alioze.com/wp-content/uploads/2016/11/developpement-nodejs.jpg",
    "link": "https://nodejs.org/en/"
    },
    {
    "title":"React JS",
    "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "logo":"https://blog.ippon.fr/content/images/2016/04/react-javascript.png",
    "link": "https://fr.reactjs.org/"
    },
    {
    "title":"Android Studio",
    "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "logo":"https://i1.wp.com/blog.hightechplace.com/wp-content/uploads/2017/12/android-studio-3.0.jpg?resize=678%2C381",
    "link": "https://developer.android.com/studio"
    },
    {
    "title":"HTML CSS",
    "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "logo":"https://www.zendevs.xyz/wp-content/uploads/2019/02/html5-css3.png.webp?x61142",
    "link": "https://www.w3.org/Style/Examples/011/firstcss.fr.html"
    },
    {
    "title":"Java",
    "text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "logo":"https://www.datasecuritybreach.fr/wp-content/uploads/2017/12/java.png",
    "link": "https://www.java.com/fr/download/"
    }
]

function App() {
    var style = {
        "display":"flex",
        "flexWrap":"wrap",
        "justifyContent": "center",
        "marginLeft": "5%",
        "width": "85%"
    }
    return (
        <div className="App">
            <Header/>
            <div class="container-fuild" style={style}>
                {perso.map((item, i) => (
                    <Vignette title={item.title} text={item.text} logo={item.logo} link={item.link}></Vignette>
                ))}
            </div>
            <ButtonB/>
        </div>
    );
}

export default App;
