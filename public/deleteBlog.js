const btnelement = document.querySelector(".create")
const articleId = btnelement.getAttribute("data-linkid");


//  what is data ?
// {mylink: "/blogs" }


btnelement.addEventListener("click", (eo) => {

    fetch(`/blogs/${articleId}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => window.location.href = data.mylink) // Data.mylink came from app.js
        .catch((err) => {
            console.log(err);
        });
})

