document.addEventListener('DOMContentLoaded', function () {
    const addBlogPost = document.getElementById("add-blog-post");
    const addBlogModal = document.getElementById("modal");
    const closeBlogModal = document.getElementById("modal-close");
    const saveBlogPost = document.getElementById("modal-save");

    const cardList = document.getElementById("card-list");
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    addBlogPost.addEventListener("click", function () {
        addBlogModal.style.display = "block";
    });

    closeBlogModal.addEventListener("click", function () {
        addBlogModal.style.display = "none";
    });

    saveBlogPost.addEventListener("click", function () {
        const newBlogTitle = document.getElementById("blog-title");
        const newBlogDesc = document.getElementById("blog-desc");
        const newBlogImgUrl = document.getElementById("blog-img-url");
        const newBlogContent = document.getElementById("blog-content");

        if (!newBlogTitle.value || !newBlogDesc || !newBlogImgUrl || !newBlogContent) {
            console.log("All Fields are Required!");
            return;
        }

        const newBlogObj = {
            "id": `${existingBlogs.length + 1}`,
            "title": newBlogTitle.value,
            "description": newBlogDesc.value,
            "imgURL": newBlogImgUrl.value,
            "content": newBlogContent.value
        }
        existingBlogs.push(newBlogObj);
        localStorage.setItem("blogs", JSON.stringify(existingBlogs));

        const blogCardElem = `
        <div class="blog-card" data-blogid=${newBlogObj.id}>
        <div class="blog-card-img">
            <img src=${newBlogObj.imgURL} />
        </div>
        <div class="blog-card-title">${newBlogObj.title}</div>
        <div class="blog-card-desc">${newBlogObj.description}</div>
        <div class="read" onclick="viewBlog(event)">Read</div>
        </div>`;
        cardList.innerHTML += blogCardElem;

        addBlogModal.style.display = "none";
    });

    existingBlogs.forEach(blog => {
        const blogCardElem = `
        <div class="blog-card" data-blogid=${blog.id}>
        <div class="blog-card-img">
            <img src=${blog.imgURL} />
        </div>
        <div class="blog-card-title">${blog.title}</div>
        <div class="blog-card-desc">${blog.description}</div>
        <div class="read" onclick="viewBlog(event)">Read</div>
        </div>`;
        cardList.innerHTML += blogCardElem;
    });
});

function viewBlog(event) {
    const cardElement = event.target.parentNode;
    const blogId = cardElement.getAttribute("data-blogid");
    window.location.href += `blogPage.html?id=${blogId}`;
}