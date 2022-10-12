import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from './who.js';

const index = () => {
    return(`
    <ul class="list-group">
        <div class="card">
            <div class="card-body p-2">
                <b class="text-white">Who to follow</b>
            </div>
        </div>
        ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
    </ul>
    `);
}

export default index;