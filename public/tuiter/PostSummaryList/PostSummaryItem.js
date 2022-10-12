const PostSummaryItem = (post) => {
    return(`
    <div class="card">
        <div class="row">
            <div class="col-9">
                <p>${post.topic}</p>
                <span>
                    <b>${post.username}</b>
                    <i class="m-1 fa-solid fa-circle-check fa-sm"></i>
                    <p>${post.time}</p>
                </span>
                <b>${post.title}</b>
                <p>${post.tweets}</p>
            </div>
            <div class="col-3">
                <img src="${post.image}">
            </div>
        </div>
    </div>
    `);
};
export default PostSummaryItem;