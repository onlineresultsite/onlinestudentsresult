document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const rollNumberInput = document.getElementById('roll-number');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');
    const resultContent = document.getElementById('result-content');

    // Load the JSON data
    fetch('results.json')
        .then(response => response.json())
        .then(data => {
            const results = data.results;

            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const rollNumber = rollNumberInput.value;
                const studentResult = results.find(result => result.rollNumber === rollNumber);

                if (studentResult) {
                    resultContent.innerHTML = `
                        <p><strong>Roll Number:</strong> ${studentResult.rollNumber}</p>
                        <p><strong>Name:</strong> ${studentResult.name}</p>
                        <p><strong>Subject:</strong> ${studentResult.subject}</p>
                        <p><strong>Marks:</strong> ${studentResult.marks}</p>
                        <p><strong>Remarks:</strong> ${studentResult.remarks}</p>
                    `;
                } else {
                    resultContent.innerHTML = '<p>Student not found.</p>';
                }

                resultContainer.style.display = 'block';
            });
        });
});
