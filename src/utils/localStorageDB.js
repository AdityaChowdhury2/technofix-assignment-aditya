// add user in localStorage
export const addUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
};

// get users from localStorage
export const getUsers = () => {
    return JSON.parse(localStorage.getItem('users')) || [];
}