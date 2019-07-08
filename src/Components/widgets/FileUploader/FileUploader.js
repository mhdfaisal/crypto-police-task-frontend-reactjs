import React from "react";
import Dropzone from "react-dropzone";
import styles from './FileUploader.module.css';
const handleOnFileDrop = (acceptedFiles)=>{
    console.log(acceptedFiles)
}

const FileUploader = () => {
  return (
    <Dropzone onDrop={acceptedFiles => handleOnFileDrop(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()} className={styles.fileUploader}>
            <input {...getInputProps()} />
            <h5>Drag and drop file here or click to upload</h5>
            <i className="fa fa-file-image-o"></i>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileUploader;
