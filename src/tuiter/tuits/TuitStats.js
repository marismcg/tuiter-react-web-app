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
                {!tuit.liked && <i className="bi bi-heart"></i>}
                {tuit.liked && <i style={{color: 'red'}} className="bi bi-heart-fill"></i>}
                {tuit.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    </>);
}
export default TuitStats;