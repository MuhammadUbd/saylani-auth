let blog = document.getElementById("blog")
const blogBtn = document.getElementById("blog-btn")
const title = document.getElementById("title")
const textArea = document.getElementById("text-area")
const date = new Date()


blogBtn.addEventListener("click", () => {
    blog.innerHTML += `<div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${title.value}</h5>
                            <p class="card-text">${textArea.value}</p>
                            <a href="#" class="btn btn-dark">${date}</a>
                        </div>
                    </div>
                </div>`
    title.value = ""
    textArea.value = ""
})

// console.log(date)
