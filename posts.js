import supabase from "./config.js";
/**
 * Gets all the post in the database
 * @returns {[{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string}]}
 */

export async function getPosts() {

    let {data, error} = await supabase
        .from('f24_postsTable')
        .select('*')
    return data;

}

// export async function addPost(newPost = {}) {
//
//     // uses the supabase library to add a new post
//     // return new post if successfully
//     // return an error and the type if couldn't supabase
// }

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
// Define the async function that adds a post to your Supabase database
export async function addPost(newPost = {}) {
    try {
        // Insert the new post into the "f24_postsTable" table
        const {data, error } = await supabase
            .from('f24_postsTable')
            .insert([newPost]); // Supabase expects an array of objects

        if (error) {
            throw error; // If there's an error, throw it so we can handle it later
        }

        return data; // If successful, return the data (the newly added post)
    } catch (error) {
        console.log("Error adding post:", error);
        return {error: error.message }; // Return the error if something goes wrong
    }
}