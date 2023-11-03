document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const rollNumberInput = document.getElementById('roll-number');
    const searchButton = document.getElementById('search-button');
    const resultContainer = document.getElementById('result-container');
    const studentName = document.getElementById('student-name');
    const resultTable = document.getElementById('result-table');
    const resultRows = document.getElementById('result-rows');

    const studentData = {
        "101": {
            "name": "KHUSHI KUMAWAT",
            "subjects": {
                "MSN": { "marks": 52, "remarks": "PASS" },
                "MSN": { "marks": 54, "remarks": "PASS" },
                "CET": { "marks": 75, "remarks": "PASS" },
                "SOCIOLOGY": { "marks": 61, "remarks": "PASS" },
                "PHARMA,PATHO,GENETIC": { "marks": 49, "remarks": "PASS" },
                "CHN": { "marks": 53, "remarks": "PASS" }
            }
        },
        // Add data for other students
    };

    searchButton.addEventListener('click', function() {
        const rollNumber = rollNumberInput.value;

        if (studentData[rollNumber]) {
            const student = studentData[rollNumber];
            studentName.textContent = student.name;

            resultRows.innerHTML = '';

            for (const subject in student.subjects) {
                const row = document.createElement('tr');
                const subjectCell = document.createElement('td');
                subjectCell.textContent = subject;
                const marksCell = document.createElement('td');
                marksCell.textContent = student.subjects[subject].marks;
                const remarksCell = document.createElement('td');
                remarksCell.textContent = student.subjects[subject].remarks;

                row.appendChild(subjectCell);
                row.appendChild(marksCell);
                row.appendChild(remarksCell);

                resultRows.appendChild(row);
            }

            resultContainer.style.display = 'block';
        } else {
            alert('Student not found. Please check the roll number.');
        }
    });
});
