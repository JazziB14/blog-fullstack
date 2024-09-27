import {getPosts} from './posts.js'
import {addPost} from "./posts.js";

const postsEl = document.querySelector('#posts');
const formEl = document.querySelector('#add-post')

getPosts()
    .then(data => {
        // console.log(data)
        // data.forEach(item => console.log(item))
        data.forEach(item => showPostsWebView(item))

    })

// **Minimum Viable Solution**, MVS (i.e.: the simplest "correct" thing that solves the problem)
// When I click the delete button
// I want it to log "this works, with the ID" in the console of my browser


function showPostsWebView(item = { }) {

    // console.log("works")
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">(${item['id']})${item['title']}</h3>
                        <p class="text-gray-600">Published on: ${item['publishedOn']} by ${item['author']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                            <button class="btn btn-error" onclick="handleDelete( ${item['id']} )">Delete</button>
                        </div>
                    </div>
                </div>
    `

    postsEl.appendChild(div);
}

function handleDelete() {

}

document.querySelector('#add-post').addEventListener('submit', async function(event){
    event.preventDefault();
    // console.log("works")
    // Get the values from the form
    const title = document.querySelector('#title').value;
    console.log(title)
    const author = document.querySelector('#author').value;
    console.log(author)
    const content = document.querySelector('#content').value;
    console.log(content)
    const publishedOn = document.querySelector('#published-date').value;
    console.log(publishedOn)
    // Create an object with this data
    const newPost = {
        title: title,
        author: author,
        content: content,
        publishedOn: publishedOn
    };

    console.log(newPost)
    // Call your function to add the post
    const response = await addPost(newPost);
    console.log(response); // Log the result (either success or error)

});



