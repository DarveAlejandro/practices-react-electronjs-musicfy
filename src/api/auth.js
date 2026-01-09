import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"; 

export class Auth {

    async register(email, password){

        try{

            const Auth = getAuth();
            await createUserWithEmailAndPassword(email, password);
        }
        catch(error){

            throw error;
        }
    }
}