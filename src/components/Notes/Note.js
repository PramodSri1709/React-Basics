import React from "react";
import "./Notes.css";
import UI from "./UI";
import { data } from "./Data";

function Note() {
  return (
    <div className="innerNote">
      {data.map((e) => {
        return (
          <>
            <UI name={e} />
          </>
        );
      })}
    </div>
  );
}

export default Note;
