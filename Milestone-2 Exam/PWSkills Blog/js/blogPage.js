document.addEventListener('DOMContentLoaded', function () {
    const back = document.getElementById("back-blog-post");

    back.addEventListener("click", function () {
        window.history.back();
    });

    // Get the blogId from the query string in the URL
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    // Retrieve blogs from LocalStorage (if any)
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Find the blog with the matching blogId
    const selectedBlog = existingBlogs.find(blog => blog.id === blogId);

    if (selectedBlog) {
        const blogContentSection = document.getElementById("read-blog-main");
        blogContentSection.innerHTML = `
        <div class="read-blog-header">
        <div>
            <div class="read-blog-title">${selectedBlog.title}</div>
            <div class="read-blog-desc">${selectedBlog.description}</div>
        </div>
        <div class="read-blog-img">
            <img src="${selectedBlog.imgURL}" alt="Blog Image">
        </div>
    </div>
    <div class="read-blog-body">${selectedBlog.content}</div>
        `;
    } else {
        // Handle the case when the selected blog does not exist
        const blogContentSection = document.getElementById("read-blog-main");
        blogContentSection.innerHTML = "<p>Blog not found.</p>";
    }
});