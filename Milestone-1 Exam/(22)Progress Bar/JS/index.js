document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById('progress_bar');

    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = ((scrollTop / scrollHeight) * 100);
        progressBar.style.width = `${progress}%`;
    });
});
