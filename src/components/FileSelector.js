import { useState } from "react";

const FileSelector = ({pet, setPet}) => {
  const readFiles = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setPet({...pet, file: files[0]})
    }
  };

  return (
    <div className="">
      <label for="fileInput">Image</label>
      <input type="file" onChange={readFiles} />
      {/* TODO Add readFiles handler */}
    </div>
  );
};

export default FileSelector;
