document.getElementById("searchSubmit").onclick = function searchSubmit() {
    // Get the pattern
    const pattern = document.getElementById('pattern').value;
    const regex = new RegExp(pattern, 'g');

    // Get the text to search
    const searchText = document.getElementById('incoming').value;

    let highlightedResult = "<pre>";
    let startPosition = 0;
    let endPosition = 0;

    // Find each match, and build the result
    const matches = searchText.matchAll(regex);
    for (const match of matches) {
        endPosition = match.index;

        // get all of string up to match, concatenate
        highlightedResult += searchText.slice(startPosition, endPosition);
  
        // add matched, with class
        highlightedResult += "<span class='found'>" + match[0] + "</span>";
        startPosition = endPosition + match[0].length;
    }

    // Finish off the result string
    highlightedResult += searchText.slice(startPosition);
    highlightedResult += "</pre>";

    // Show the hightlighted text in the page
    document.getElementById("searchResult").innerHTML = highlightedResult;
 }