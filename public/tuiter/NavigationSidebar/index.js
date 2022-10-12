const NavigationSidebar = () => {
    return(`
     <div class="list-group">
        <a class="list-group-item" href="#">
            <i class="fab fa-twitter"></i></a>
        <a class="list-group-item" href="../home.html">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-house"></i> Home
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-house"></i>
            </div>
        </a>
        <a class="list-group-item active" href="../explore/index.html">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-hashtag"></i> Explore
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-hashtag"></i>
            </div>
        </a>
        <a class="list-group-item" href="../notifications.html">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-bell"></i> Notifications
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-bell"></i>
            </div>
        </a>
        <a class="list-group-item" href="../messages.html">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-envelope"></i> Messages
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-envelope"></i>
            </div>
        </a>
        <a class="list-group-item" href="../bookmarks/index.html">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-bookmark"></i> Bookmarks
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-bookmark"></i>
            </div>
        </a>
        <a class="list-group-item" href="../lists.html">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-list"></i> Lists
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-list"></i>
            </div>
        </a>
        <a class="list-group-item" href="../profile.html">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-user"></i> Profile
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-user"></i>
            </div>
        </a>
        <a class="list-group-item" href="#">
            <div class="d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block">
                <i class="fa-solid fa-caret-down"></i> More
            </div>
            <div class="d-block d-sm-block d-md-block d-lg-block d-xl-none d-xxl-none">
                <i class="fa-solid fa-caret-down"></i>
            </div>
        </a>
     </div>
     <div class="d-grid mt-2">
        <a href="../tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
     </div>
    `)
};

export default NavigationSidebar;