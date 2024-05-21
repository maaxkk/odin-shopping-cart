export const inputs = [
    {
        id: 1,
        name: 'email',
        type: 'email',
        placeholder: 'Enter your email...',
        errorMessage: '*It should be valid email address',
        label: 'Email',
        required: true,
    },
    {
        id: 2,
        name: 'password',
        type: 'password',
        placeholder: 'Enter your password...',
        errorMessage:
            'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
        label: 'Password',
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
    },
    {
        id: 3,
        name: 'fullName',
        type: 'text',
        placeholder: 'Enter your full name...',
        errorMessage: "*It can't be empty",
        label: 'fullName',
        pattern: '^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$',
        required: true,
    },
];
