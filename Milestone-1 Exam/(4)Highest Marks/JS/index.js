// Write a program that iterates through the array and finds the highest marks scored by any student in the class.

function topRanker(marksofStudents, noOfStudents) {
    let index = -1;

    if(marksofStudents.length != noOfStudents) {
        console.log(`Please Enter Marks of All ${noOfStudents} Students--:`);
        return index;
    }

    for(let i = 0;i < noOfStudents;i++) {
        if((typeof marksofStudents[i]) != 'number') {
            console.log('Please Enter All Marks in Number Format Only--:');
            index = -1;
            break;
        }

        if(i != 0) {
            index = (marksofStudents[i] > marksofStudents[index])? i : index;
        } else {
            index = i;
        }
    }

    return (index + 1);
}

document.addEventListener('DOMContentLoaded', function() {
    const noOfStudents = 5;
    const marks = new Array(noOfStudents);

    const findBtn = document.getElementById('find-btn');
    const clearBtn = document.getElementById('clear-btn');

    findBtn.addEventListener('click', function(event) {
        event.preventDefault();  //Stops page from reloading

        // Getting input elements & display element.
        const inputMarksElms = document.getElementsByTagName('input');
        const display = document.getElementById('display');

        // Storing Student score into 'marks' array & checking for negative numbers.
        for(let i = 0;i < noOfStudents;i++) {
            marks[i] = parseInt(inputMarksElms[i].value);
            if(isNaN(marks[i])) {
                display.innerHTML = `Please Enter Marks of all Students: Student ${i+1}.`
                return;
            }
            if(marks[i] < 0) {
                display.innerHTML = `All Marks should be Positive Number: Student ${i+1}.`
                return;
            }
        }
        console.log(`marks: ${marks}`);

        // Finding top ranker using topRanker();
        const firstRanker = topRanker(marks, noOfStudents);
        if(firstRanker == -1) {
            display.innerHTML = "Can not find the First Rank Holder.";
        } else {
            display.innerHTML = `First Ranker is Student No.: ${firstRanker}`;
        }
    });

    clearBtn.addEventListener('click', function(event) {
        event.preventDefault();  //Stops page from reloading

        // Getting input elements & display element.
        const inputMarksElms = document.getElementsByTagName('input');
        const display = document.getElementById('display');

        // Removing existing values from input fields.
        for(let i = 0;i < noOfStudents;i++) {
            inputMarksElms[i].value = "";
        }
        // Removing text from display section.
        display.innerHTML = "";
    });
});