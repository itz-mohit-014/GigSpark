import { Children, useEffect } from "react";
import {
  getItemsFromLocalStorage,
  removeItemFromLocalstorage,
} from "../../services/localStorage";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCurrentUser,
  expireSessionTimeout,
  setCurrentUser,
  updateSessionTimeout,
} from "../../slices/user.slice";
import { showAuthenticatePage } from "../../slices/showLoginForm.slice";
import {Navigate} from 'react-router-dom'

const ProtectedRoute = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user?.user);
  const sessionExpiry = useSelector((store) => store.user?.sessionTimeout);
  const isAuthenticate = useSelector(
    (store) => store.showAuthForm?.isAuthenticate
  );

  const validateSession = () => {
    const currentTime = new Date().getTime();
    if (!currentUser || !sessionExpiry || currentTime > sessionExpiry) {
      // expired token
      removeItemFromLocalstorage("user");
      removeItemFromLocalstorage("sessionTimeout");
      dispatch(deleteCurrentUser());
      dispatch(expireSessionTimeout());
      dispatch(showAuthenticatePage("login"));
    }
  };

  useEffect(() => {
    validateSession();
  }, []);

  return !isAuthenticate ? props?.Children  : <Navigate to={"/"}/>;
};

export default ProtectedRoute;
