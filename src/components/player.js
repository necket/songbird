import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

class Player extends React.Component {

    render() {
        return (
            <div className="player">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <img src={this.props.complete ?  this.props.bird.image : require('./../img/bird.jpg')} alt="bird" className="img-fluid w-100" id="bird-img"/>
                    </div>
                    <div className="col-12 col-md-9">
                        <ul className="selected-bird list-unstyled mt-4">
                            <li className="bird-name pl-3">
                                {this.props.complete ?  this.props.bird.name : '******'}
                            </li>
                            <li className="audio">
                            <AudioPlayer
                                autoPlay={false}
                                src={this.props.bird.audio}
                                showJumpControls={false}
                                autoPlayAfterSrcChange={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                            />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;
