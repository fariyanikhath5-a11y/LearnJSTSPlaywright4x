let browser = "brave";

switch (browser) {
    case "chrome":
    case "edge":
    case "brave":
    case "Opera":
        console.log("Chromium rendering engine project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");
}