export const mockCredentials = {
  userName: 'testUser@stayr.com',
  password: 'helloWorld'
}

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (value?: string) => value && EMAIL_REGEX.test(value) && value === mockCredentials.userName

export const validatePassword = (value?: string) => value && value.length > 6 && value === mockCredentials.password