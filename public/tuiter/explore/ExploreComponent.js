import index from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row align-items-center mb-3">
                <div class="col-11">
                    <div class="input-group">
                        <span class="input-group-text wd-span wd-round-border"><i class="fa-solid fa-magnifying-glass wd-icon"></i></span>
                        <input type="text" class="form-control wd-round-border" placeholder="Search Tuiter">
                    </div>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html"><i class="fa-solid fa-gear fa-lg"></i></a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
            <div class="card">
                <img class="card-img" src="../../images/spacex.jfif">
                <div class="card-img-overlay d-flex flex-column">
                    <div class="mt-auto"><h2 class="text-light">SpaceX's Starship</h2></div>
                </div>
            </div>
           ${index()}
    `);
}
export default ExploreComponent;
