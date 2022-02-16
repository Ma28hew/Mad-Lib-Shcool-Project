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
    let result = '"We need to get some ' + pluralNoun + ' for our ' + adjective + ' wedding!" You need to ' + verb + ' or you might not be able to get my favourite. ' + noun + ' Please?"';
    
    // Output
    document.getElementById("result").innerHTML = result;
}