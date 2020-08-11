const LOCAL_STORAGE_KEY = '__storage';

export const intitialUserData = {
    firstName: '',
    lastName: '',
    personalNumber: '',
    adress: '',
    city: '',
    postNumber: '',
    phoneNumber: '',
    email: '',
    img: 'https://motsandco.com/wp-content/uploads/avatar-2-300x300.png',
    industryOptions: [
        {
            label: 'Företag 1',
            value: false,
        },
        {
            label: 'Företag 2',
            value: false,
        },
        {
            label: 'Företag 3',
            value: false,
        },
        {
            label: 'Företag 4',
            value: false,
        },
        {
            label: 'Företag 5',
            value: false,
        },
        {
            label: 'Företag 6',
            value: false,
        },
    ],
};

export const saveDataToLocalStorage = (data) => {
    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(data);
};

export const initialValues = (() => {
    try {
        return JSON.parse(localStorage[LOCAL_STORAGE_KEY])
    } catch (e) {
        return intitialUserData;
    }
})();

