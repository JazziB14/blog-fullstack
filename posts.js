/**
 * Gets all the post in the database
 * @returns {[{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string}]}
 */
export function getPosts() {
    return [
  {
    "id": 1,
    "title": "The Future of Web Development",
    "publishedOn": "2024-07-15",
    "publishedBy": "John Doe",
    "content": "As we look ahead to the future of web development, exciting trends are emerging..."
  },
  {
    "id": 2,
    "title": "Mastering Responsive Design",
    "publishedOn": "2024-07-10",
    "publishedBy": "Jane Smith",
    "content": "Responsive design is crucial in today's multi-device world. Here are some tips to master it..."
  },
  {
    "id": 3,
    "title": "The Power of CSS Grid",
    "publishedOn": "2024-07-05",
    "publishedBy": "Alex Johnson",
    "content": "CSS Grid has revolutionized web layout. Let's explore its capabilities and best practices..."
  },
  {
    "id": 4,
    "title": "Looping in JS",
    "publishedOn": "2024-08-05",
    "publishedBy": "Alex Johnson",
    "content": "This is an interesting example of looping..."
  }]
}

/**
 * Deletes a post by its ID
 * @param id
 * @returns {string}
 */
export function deletePost(id){
    return `deleting post with ${id}`
}

/**
 * Updates post with ID
 * @param id
 * @param content
 * @returns {string}
 */
export function updatePosts(id, content){
    return `updating post with${id}`
}