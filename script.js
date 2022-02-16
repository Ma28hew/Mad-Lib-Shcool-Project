// Mad Lib with JavaScript by Mr. H.

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {
    // Input
    let pluralNoun = document.getElementById("plural-noun").value;
    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;

    // Process
    let result = '"There are to many ' + pluralNoun + ' on this ' + adjective + '
    airplane!", I scremed. "Somebody has to ' + verb + ' on the ' + noun + ' 
    to solve this problem"';
    
    // Output
    document.getElementById("result").innerHTML = result;
}