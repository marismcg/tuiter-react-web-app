import React from "react";

const TuitStats = ({tuit}) => {
    return (<>
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat"></i>
                {tuit.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i>
                {tuit.retuits}
            </div>
            <div className="col-3">
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    </>);
}
export default TuitStats;