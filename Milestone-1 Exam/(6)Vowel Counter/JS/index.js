document.addEventListener('DOMContentLoaded', function() {
    const countBtn = document.getElementById('countBtn');
    const clearBtn = document.getElementById('clearBtn');

    countBtn.addEventListener('click', function(event) {
        event.preventDefault();

        let vowelCount = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u']
        const name = document.getElementById('name').value;
        const vowelCountDisp = document.getElementById('showVowelCount');

        // console.log(uName);
        for(const ch of name) {
            if(vowels.includes(ch)) {
                vowelCount++;
            }
        }

        vowelCountDisp.innerHTML = `Number of vowels: ${vowelCount}`
    });

    clearBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('name').value = '';
        document.getElementById('showVowelCount').innerHTML = 'Number of vowels: 0';
    })
});