const WhoToFollowListItem = (who) => {
    return(`
    <div class="card">
        <div class="row align-items-center flex-nowrap">
            <div class="col-lg-3 col-xl-2 col-xxl-2">
                <span class="m-3">
                    <img class="img-fluid rounded-circle" src="${who.avatarIcon}">
                </span>
            </div>
            <div class="col-lg-4 col-xl-7 col-xxl-7">
                <div class="card-body text-nowrap text-white">
                    <b>${who.userName}</b>
                    <i class="fa-solid fa-circle-check fa-sm"></i>
                    <br>
                    @${who.handle}
                </div>
            </div>
            <div class="col-lg-5 col-xl-3 col-xxl-3">
                <a href="#" class="btn btn-sm btn-primary rounded-pill">Follow</a>
            </div>
        </div>
    </div>
    `);
};
export default WhoToFollowListItem;