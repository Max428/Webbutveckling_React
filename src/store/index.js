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
            label: 'Bygg',
            value: false,
        },
        {
            label: 'Medicin',
            value: false,
        },
        {
            label: 'IT',
            value: false,
        },
        {
            label: 'Finans',
            value: false,
        },
        {
            label: 'Textil',
            value: false,
        },
        {
            label: 'Cosmetology',
            value: false,
        },
        {
            label: 'Vegan livstil',
            value: false,
        },
        {
            label: 'Industri x',
            value: false,
        }
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
