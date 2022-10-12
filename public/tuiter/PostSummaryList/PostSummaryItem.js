const PostSummaryItem = (post) => {
    return(`
    <div class="card">
        <div class="row align-items-center">
            <div class="col-9">
                <div class="card-body">
                <p class="mb-0 text-secondary">${post.topic}</p>
                <span class="d-flex align-items-center">
                    <b class="text-white">${post.userName}</b>
                    <i class="m-1 fa-solid fa-circle-check fa-sm"></i>
                    <p class="mb-0 text-secondary">- ${post.time}</p>
                </span>
                <b class="text-white">${post.title}</b>
                <p class="mb-0 text-secondary">${post.tweets}</p>
                </div>
            </div>
            <div class="col-3">
                <div class="p-3"><img class="img-fluid rounded" src="${post.image}"></div>
            </div>
        </div>
    </div>
    `);
};
export default PostSummaryItem;