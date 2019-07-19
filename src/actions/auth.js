import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
             // // This gives you a Google Access Token.
             // var token = result.credential.accessToken;
             // // The signed-in user info.
             // var user = result.user;
             // TO VALIDATE OAUTH = https://console.developers.google.com/apis/credentials and ensure project name of firebase is there
            });
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
