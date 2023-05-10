import React from 'react'

function HeroVideo() {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-5">
                <figure className="w-1/2"><img src={require("../img/Hero3-1920x1080.jpg")} alt="Movie" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroVideo
