import React from "react";
import Dropzone from "react-dropzone";
import styles from './FileUploader.module.css';

const handleOnFileDrop = (acceptedFiles, onFileSelected)=>{
   onFileSelected(acceptedFiles[0])
}

const handleDropRejection = (e)=>{
  alert("Please select an image file!!")
}

const FileUploader = ({onFileSelected, avatar}) => {
  return (
    <Dropzone onDrop={acceptedFiles => handleOnFileDrop(acceptedFiles, onFileSelected)} accept="image/*" onDropRejected={handleDropRejection}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()} className={`${avatar.touched && !avatar.valid ? styles.fileUploaderRequired : styles.fileUploader}`}>
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
