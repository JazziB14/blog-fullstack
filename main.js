import {getPosts} from './posts.js'

const postsEl = document.querySelector('#posts');
const API_URL = 'https://xtxwmrmjrggeughetccr.supabase.co   /rest/v1'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0eHdtcm1qcmdnZXVnaGV0Y2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NjU2OTAsImV4cCI6MjA0MjM0MTY5MH0.4ZCb7HD6OsV2mp4YVPuxurRbt7w8JAkx5k2fMnLNH2g'

getPosts() .forEach(item => showPostsWebView(item))

function showPostsWebView(item = { }) {

    // console.log("works")
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">${item['title']}</h3>
                        <p class="text-gray-600">Published on: ${item['publishedOn']} by ${item['publishedBy']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
    `

    postsEl.appendChild(div);
}


