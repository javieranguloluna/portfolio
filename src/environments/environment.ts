export const environment = {
  firebase: {
    projectId: 'jal-dev-front',
    appId: '1:411168515822:web:778cf6d9d4eea35c8135ff',
    storageBucket: 'jal-dev-front.appspot.com',
    apiKey: process.env['NG_APP_FIREBASE_API_KEY'] || '',
    authDomain: 'jal-dev-front.firebaseapp.com',
    messagingSenderId: '411168515822',
  },
  RECAPTCHA_SITE_KEY: process.env['NG_APP_RECAPTCHA_SITE_KEY'] || ''
};
