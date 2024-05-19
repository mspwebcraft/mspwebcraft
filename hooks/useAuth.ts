import fetchApi from "@/lib/axios";
import { UserProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAuth = () => {};

export default useAuth;

export const useUser = () => {
  return useQuery<UserProps>({
    queryKey: ["fetch-current-user"],
    queryFn: () => fetchApi("GET", "/api/auth/me"),
  });
};
