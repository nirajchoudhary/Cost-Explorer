import jwt from 'jsonwebtoken';
import {isEmpty} from 'lodash';

// Token
export const setToken = (token) => {
    localStorage.setItem("r_token", token);
};

export const getToken = () => localStorage.getItem('r_token');

export const deleteToken = () => localStorage.removeItem('r_token');

// User
export const setUser = (user) => {
    localStorage.setItem("r_user", JSON.stringify(user));
};

export const getUser = () => JSON.parse(localStorage.getItem('r_user'));

export const deleteUser = () => localStorage.removeItem('r_user');

// Permission
export const setPermission = (permissions) => {
    let permissionObj = {};
    permissions.map(permission => {
        permissionObj[permission.access_function] = permission
    });
    localStorage.setItem("r_permission", JSON.stringify(permissionObj));
};

export const getPermission = () => {
    let permissions = JSON.parse(localStorage.getItem('r_permission'));
    
    if (permissions === null || isEmpty(permissions)) {
        localStorage.clear();
        window.location.reload();
        return {};
    }
    return permissions;
}

export const deletePermission = () => localStorage.removeItem('r_permission');

// set location list
export const setLocation = (locationList) => {
    localStorage.setItem("r_location", JSON.stringify(locationList));
};

// Set current selected location
export const setCurrentLocation = (location) => {
    localStorage.setItem("r_current_location", location);
};

// Get current selected location
export const getCurrentLocation = () => {
    return localStorage.getItem("r_current_location");
};

export const getLocation = () => localStorage.getItem('r_location');

export const deleteLocation = () => localStorage.removeItem('r_location');

// clear all token
export const clearToken = () => new Promise((resolve, reject) => {
    try {
        localStorage.removeItem('r_token');
        localStorage.removeItem('r_permission');
        localStorage.removeItem('r_user');
        localStorage.removeItem('r_current_location');
        deletePermission();
        resolve(true);
    } catch (err) {
        reject(false);
    }
});

export const setReloadFlag = (flag) => localStorage.setItem("r_reload_flag", flag);
export const getReloadFlag = () => localStorage.getItem('r_reload_flag');

export const getUserFromToken = () => jwt.decode(localStorage.getItem('r_token'));
