import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from "./useShowToast";
import useAuthstore from "../store/authStore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, loading, firebaseError] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthstore(state => state.login);
  // const logout = useAuthstore(state => state.logout);

  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname) {
      showToast('Error', "Please fill all the fields", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);

      if (!newUser) {
        showToast('Error', firebaseError?.message || "Welcome back! It seems you’re already vibing with us. Log in to rediscover the magic.", "error");
        return;
      }

      const userDoc = {
        uid: newUser.user.uid,
        email: inputs.email,
        username: inputs.username,
        fullname: inputs.fullname,
        bio: "",
        profilePicURL: "",
        followers: [],
        following: [],
        posts: [],
        createdAt: Date.now(),
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      loginUser(userDoc);

      // Show success message
      showToast('Success', 'Welcome to Vibeshare! Your adventure begins here. Log in to dive into the vibe.', 'success');
      
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showToast("Error", "User already exists. Please log in to enter Vibeshare.", "error");
      } else {
        showToast("Error", error.message, "error");
      }
    }
  };

  return { loading, error: firebaseError, signup };
};

export default useSignUpWithEmailAndPassword;
