/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from "react";

const VideoPlaybackContext = createContext({
  playingVideoId: null,
  setPlayingVideoId: () => {},
});

function VideoPlaybackProvider({ children }) {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  return (
    <VideoPlaybackContext.Provider value={(playingVideoId, setPlayingVideoId)}>
      {children}
    </VideoPlaybackContext.Provider>
  );
}

function VideoItem({ videoId, title, poster, src }) {
  const [videoIsActive, setVideoIsActive] = useState(false);
  const { playingVideoId ,setPlayingVideoId } = useContext(VideoPlaybackContext);

  const handleTogglePlay = () => {
    if ( playingVideoId === videoId){
      setPlayingVideoId(null) ;
      setVideoIsActive(false);
    }
    else{
      setPlayingVideoId(videoId) ; 
      setVideoIsActive(true);
    }
  };

  return (
    <li key={videoId}>
      <h3>{title}</h3>
      <article>
        <video poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
        <button
          title={videoIsActive ? "Pause" : "Play"}
          onClick={handleTogglePlay}
        >
          {videoIsActive ? "⏸" : "▶"}
        </button>
      </article>
    </li>
  );
}

function NewsFeed() {
  const videos = [
    {
      id: 1,
      title: "The React Way",
      poster: "https://react.gg/img/visualized-og2.jpg",
      src: "https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4",
    },
    {
      id: 2,
      title: "The History of the Web",
      poster: "https://react.gg/img/visualized-og1.jpg",
      src: "https://stream.mux.com/EwJPlEBa0046jGSVdYOnRsX9WnqHjytgIBXwkOt7LvVg/high.mp4",
    },
    {
      id: 3,
      title: "Rendering, Visualized",
      poster: "https://react.gg/img/visualized-og5.jpg",
      src: "https://stream.mux.com/VvQKMwPEOq5BUnc9eRN4sL5sUEZrHqWxNlCbpXSkE3I/high.mp4",
    },
  ];

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {videos.map((video) => {
          return (
            <VideoItem
              videoId={video.id}
              title={video.title}
              src={video.src}
              poster={video.poster}
              key={video.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default function News() {
  return (
    <VideoPlaybackProvider>
      <NewsFeed />
    </VideoPlaybackProvider>
  );
}
