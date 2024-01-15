import React from "react";
import YouTube from "react-youtube";

class MovieClip extends React.Component {
  render() {
    const { videoId } = this.props;

    const options = {
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <YouTube
        videoId={videoId}
        opts={options}
        onReady={this._onReady}
        id="video"
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default MovieClip;
