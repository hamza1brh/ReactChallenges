import { useRef, useState } from "react";
import "./leader.css";
export default function FollowTheLeader() {
  const [position, setPosition] = useState([0, 0]);

  const boxRef = useRef(null);

  const handleClick = ({ clientX, clientY }) => {
    const  { width, height } = boxRef.current.getBoundingClientRect();
    setPosition([clientX - width / 2, clientY - height / 2]);
  };

  return (
    <div className="wrapper" onClick={handleClick}>
      <div
        ref={boxRef}
        className="box"
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}
