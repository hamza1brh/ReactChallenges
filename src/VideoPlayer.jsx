import { useRef, useState } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const vid = useRef(null);
  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      vid.current.pause();
    } else {
      vid.current.play();
    }
  };

  return (
    <section className="container">
      <h1>Video Player</h1>
      <article>
        <video
          ref={vid}
          width={700}
          poster="https://image.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/thumbnail.webp"
        >
          <source
            src="https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <button
            title={isPlaying ? "Pause" : "Play"}
            onClick={handleTogglePlay}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>
      </article>
    </section>
  );
}
