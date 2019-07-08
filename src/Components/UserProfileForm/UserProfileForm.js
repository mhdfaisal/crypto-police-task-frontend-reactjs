import React from 'react';
import FormField from '../widgets/FormField/FormField';

const UserProfileForm = ({name, handleChange, website})=>{

    return(
        <>
            <FormField {...name} handleChange={handleChange} id="name" />
            <FormField {...website} handleChange={handleChange} id="website" />
        </>
    )
}

export default UserProfileForm;