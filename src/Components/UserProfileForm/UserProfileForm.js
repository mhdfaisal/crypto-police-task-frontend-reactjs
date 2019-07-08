import React from 'react';
import FormField from '../widgets/FormField/FormField';
import FileUploader from '../widgets/FileUploader/FileUploader';

const UserProfileForm = ({name, handleChange, website, country})=>{

    return(
        <>
            <FormField {...name} handleChange={handleChange} id="name" />
            <FormField {...website} handleChange={handleChange} id="website" />
            <FormField {...country} handleChange={handleChange} id="country" />
            <FileUploader />
        </>
    )
}

export default UserProfileForm;