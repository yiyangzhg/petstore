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
    </div>
  );
};

export default FileSelector;
