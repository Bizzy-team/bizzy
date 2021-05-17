import actionsTypes from './types';

export function populateUser (userData) {
    return {
        type: actionsTypes.users.POPULATE_USER,
        data: userData
    }
}