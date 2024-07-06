import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-full absolute top-0 right-0 flex justify-center items-center bg-text opacity-55"></div>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
