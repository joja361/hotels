import { useRef } from "react";
import { Button } from "react-bootstrap";

const FileUploader = (props) => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    // #TODO: Where to store profile picture
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="secondary"
        className="shadow-none mt-4"
      >
        Profile Picture
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default FileUploader;
