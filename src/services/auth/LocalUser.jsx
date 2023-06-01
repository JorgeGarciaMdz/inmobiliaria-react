const setLocalUser = (user) => localStorage.setItem('user', JSON.stringify(user));

const getLocalUser = async () => {
    const user = localStorage.getItem('user');
    if( user )
        return JSON.parse(user);
    return null;
}

const setLocalToken = (token) => localStorage.setItem('token', token);

const getLocalToken = () => {
    return localStorage.getItem('token');
}

const removeLocalToken = () => localStorage.removeItem('token');

export { setLocalToken, getLocalToken, setLocalUser, getLocalUser, removeLocalToken }
