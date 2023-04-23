import {setSeconds, setMinutes, setHours, digitalTime} from "./clock.js";
import {popout} from "./popouts.js";
import {settings} from "./settings.js";

setInterval(()=>{
    setSeconds();
    setMinutes();
    setHours();
    digitalTime();
},1000);

popout();
settings();