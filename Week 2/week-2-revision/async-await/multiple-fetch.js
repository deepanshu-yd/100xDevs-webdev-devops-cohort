const { log } = require("node:console");

async function fetchData() {
    const userPromise = fetch('api/user');
    const postPromise = fetch('api/posts');

    //
    const [userRes, postsRes] = await Promise.all([userPromise, postsPromise]);
    //

    const user = await userRes.json();
    const posts = await postsRes.json();

    console.log(user, posts);
}
