import { useState , useRef } from "react";

export default function ExpandingTextarea() {
  const [text, setText] = useState("");
  const areaRef = useRef(null) ; 


  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <textarea
        ref = {areaRef}
        id="textarea"
        placeholder="Enter some text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        rows={1}
      />
    </section>
  );
}
