import ApiManager from './ApiManager';

export const loginUser = async userData => {
  try {
    const result = await ApiManager('/users/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: userData,
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const signUpUser = async userData => {
  try {
    const result = await ApiManager('/users/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: userData,
    });
    return result;
  } catch (error) {
    return error.message;
  }
};
