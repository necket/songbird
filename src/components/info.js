import React from 'react';
import AudioPlayer from 'react-h5-audio-player';

class Info extends React.Component {

    render() {
        if(this.props.choose === null) {
            return (
                <div className="col-12 col-lg-6 h-100">
                    <div className="info">
                         <p className="info-start">              
                             Послушайте плеер. <br/>
                             Выберите птицу из списка
                         </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-lg-6 h-100">
                    <div className="info">
                        <div className="info-choose">              
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <img src={this.props.choose.image} alt={this.props.choose.name} className="img-fluid"/>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p className="bidr-info-name">
                                        {this.props.choose.name}
                                    </p>
                                    <p className="bidr-info-species">
                                        {this.props.choose.species}
                                    </p>
                                    <AudioPlayer
                                        onPlay={stopAudio}
                                        autoPlay={false}
                                        src={this.props.choose.audio}
                                        showJumpControls={false}
                                        autoPlayAfterSrcChange={false}
                                        customVolumeControls={[]}
                                        customAdditionalControls={[]}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="bidr-info-description">
                                        {this.props.choose.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
       
    }
}

export default Info;

function stopAudio() {
    document.querySelector('audio').pause();
}