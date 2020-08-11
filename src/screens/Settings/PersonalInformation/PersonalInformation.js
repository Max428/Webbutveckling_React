import React, { useState } from 'react';

import { saveDataToLocalStorage } from 'store';

import Input from 'components/Input';

import './PersonalInformation.styled.sass';

const PersonalInformation = ({ userData, setUserData }) => {

    const [img, setImage] = useState(userData.img);

    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [personalNumber, setPersonalNumber] = useState(userData.personalNumber);
    const [adress, setAdress] = useState(userData.adress);
    const [email, setEmail] = useState(userData.email);
    const [city, setCity] = useState(userData.city);
    const [postNumber, setPostNumber] = useState(userData.postNumber);
    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);


    const userDataObject = {
        img: img,
        firstName: firstName,
        lastName: lastName,
        personalNumber: personalNumber,
        adress: adress,
        city: city,
        postNumber: postNumber,
        phoneNumber: phoneNumber,
        email: email,
    };

    const handleSave = () => {
        setUserData({ ...userData, img, firstName, lastName, personalNumber, adress, city, postNumber, phoneNumber, email});
        saveDataToLocalStorage({...userData});
    };

    return (
        <div className='input-form'>
            <div className='input-item-medium'>
            <Input label='Photo' currentValue={img} handleChange={setImage} />
            </div>
            <div className='input-item-small'>
                <Input label='First name' currentValue={firstName} handleChange={setFirstName} />
            </div>
            <div className='input-item-small'>
                <Input label='Last name' currentValue={lastName} handleChange={setLastName} />
            </div>
            <div className='input-item-medium'>
                <Input label='Number' currentValue={personalNumber} handleChange={setPersonalNumber} />
            </div>
            <div className='input-item-medium'>
                <Input label='Adress' currentValue={adress} handleChange={setAdress} />
            </div>
            <div className='input-item-small'>
                <Input label='City' currentValue={city} handleChange={setCity} />
            </div>
            <div className='input-item-small'>
                <Input label='Post number' currentValue={postNumber} handleChange={setPostNumber} />
            </div>
            <div className='input-item-medium'>
                <Input label='Phone number' currentValue={phoneNumber} handleChange={setPhoneNumber} />
            </div>
            <div className='input-item-medium'>
                <Input label='Email' currentValue={email} handleChange={setEmail} />
            </div>

            <button onClick={() => handleSave()} className='button-save'>Spara</button>
        </div>
    );
};

export default PersonalInformation;
