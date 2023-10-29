import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

class FirebaseServices {
    constructor() {
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }
    register(auth, email, password) {
        try {
            return createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    sendEmailVerification(auth.currentUser).then(res => console.log("email sent"))
                     return user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
        catch (err) {
            console.log("error", err);
        }
    }
    login(auth, email, password) {
        try {

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("signin", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
        catch (err) {
            console.log("error", err);
        }
    }
}

export default new FirebaseServices();