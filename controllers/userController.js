//global
export const join = (req, res) => res.send('Join');
export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('Logout');

//user
export const users = (req, res) => res.send('Users');
export const userDetail = (req, res) => res.send('User Detail');
export const editProfile = (req, res) => res.send('Edit Profile');
export const changePassword = (req, res) => res.send('Change Passsword');