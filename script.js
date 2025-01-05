document.addEventListener('DOMContentLoaded', () => {
    // Function to wrap each letter in a span with the hover-card class
    function wrapLettersInHoverCard(element) {
        const text = element.innerHTML;
        const wrappedText = [...text].map(letter => {
            if (letter.trim() === '') {
                // Leave spaces as they are
                return letter;
            }
            // Wrap each letter in a span with the hover-card class
            return `<span class="hover-card">${letter}</span>`;
        }).join('');
        element.innerHTML = wrappedText;
    }

    // Select all elements you want to apply this to (h1, p, h2, h3)
    const elements = document.querySelectorAll('h1, p, h2, h3');  // Adjust selector as needed

    // Apply the wrapping to each element
    elements.forEach(wrapLettersInHoverCard);
});
