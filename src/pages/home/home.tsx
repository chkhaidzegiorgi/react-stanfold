import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/store";
import { coreActions, coreSelectors } from "src/store/core";

const Home = () => {
  console.log("rendered home");
  const token = useAppSelector(coreSelectors.tokenSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("dispatched");
    dispatch(coreActions.setToken());
  }, []);

  return <>Home is here, token: {token}</>;
};
export default Home;
