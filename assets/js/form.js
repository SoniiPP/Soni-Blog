
document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create blog post object
    const blogPost = { username, title, content };

    // Get existing posts from localStorage or initialize an empty array if none exist
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Add new post to the array
    posts.push(blogPost);

    // Save the updated posts array to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(posts));

    // Redirect to the blog page
    window.location.href = 'blog.html';
});
