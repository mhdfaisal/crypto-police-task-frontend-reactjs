import React from "react";
import Dropzone from "react-dropzone";

const handleOnFileDrop = (acceptedFiles)=>{
    console.log(acceptedFiles)
}

const FileUploader = () => {
  return (
    <Dropzone onDrop={acceptedFiles => handleOnFileDrop(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileUploader;
