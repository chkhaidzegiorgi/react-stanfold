import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/store";
import { coreActions, coreSelectors } from "src/store/core";

const Home = () => {
  console.log("rendered home");
  const providers = useAppSelector(coreSelectors.providersSelector);
  const token = useAppSelector(coreSelectors.tokenSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coreActions.setToken());
    dispatch(coreActions.setProviders());
  }, []);

  console.log(providers, "providers");

  return <>Home is here, token: {token}</>;
};
export default Home;
