// Step 1: Fetch the webpage content
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://leetcode.com/problems/palindrome-linked-list/');
fetch(url)
    .then(response => response.text())
    .then(html => {
        // Step 2: Parse the HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Find the element with class "xFUwe" and extract the question text
        const xFUweElement = doc.querySelector('.xFUwe');
        if (xFUweElement) {
            // Find the <p> element within the xFUweElement and extract its text
            const questionElement = xFUweElement.querySelector('p');
            if (questionElement) {
                // Extract the text content of the <p> element
                const questionText = questionElement.textContent;
                document.getElementById('output').textContent = questionText;
            } else {
                console.log('No <p> element found within the "xFUwe" element.');
            }
        } else {
            console.log('Element with class "xFUwe" not found.');
        }
    })
    .catch(error => {
        console.error('Error fetching or parsing the webpage:', error);
    });
