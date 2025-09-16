import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../../app/store";
import { api } from "../../shared/api";
import { setToken } from "../login/features/tokenSlice";
import SuspenseLoading from "../../shared/components/suspense-loading";

const Auth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.setToken.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("me")
      .then(() => {})
      .catch(() => {
        dispatch(setToken(null));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token, dispatch]);

  if (loading) return <SuspenseLoading />;

  return token ? <Outlet /> : <Navigate replace to="/login" />;
};

export default memo(Auth);
