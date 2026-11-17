import log from "./Logs/Logger.js";
//default import no need to use curly braces
import { logBetter } from "./Logs/Logger.js";

log('starting');

//o/p: 
//[LOG]starting
//-----------
//[LOGS] Starting the TC of the app.vwo.com
//-----------

//gives error in output when we dont provide .js in import 
// or open settings and search with • import module specifier ending, and set JavaScript 
// › Preferences: Import Module Specifier Ending to .js. This forces VS Code to always
//  add .js automatically when you import files.

logBetter("Starting the TC of the app.vwo.com");

