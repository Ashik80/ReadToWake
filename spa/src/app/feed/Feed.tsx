import React from 'react'
import Event from './event/Event'
import CurrentlyReading from './currentReading/CurrentlyReading'
import './Feed.css'

const Feed = () => {
    return (
        <div className="mt-3">
            <div className="custom-container">
                <div className="row">
                    <div className="col-sm-4">
                        <CurrentlyReading />
                    </div>
                    <div className="col-sm-8">
                        <Event />
                        <Event />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed
