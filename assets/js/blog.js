document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeBtn = document.getElementById('toggleTheme');
    const body = document.body;

    // Function to toggle theme
    function toggleTheme() {
        body.classList.toggle('dark-mode');
    }

    // Attach the toggle theme event
    toggleThemeBtn.addEventListener('click', function(){
        document.body.classList.toggle('dark-mode');

        // Optional: Save the current theme preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

    });

    // Back button functionality
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        window.history.back(); // Go back to the previous page
    });

    const postsContainer = document.getElementById('postsList');

    // Get blog posts from localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Check if there are any posts to display
    if (posts.length > 0) {
        posts.forEach(function(post) {
            // Create container for each post
            const postElement = document.createElement('div');
            postElement.classList.add('post-container');

            // Insert post data into the container
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <span>Posted by: ${post.username}</span>
            `;

            // Append the post container to the main container
            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = '<p>No blog posts to display.</p>';
    }
});

