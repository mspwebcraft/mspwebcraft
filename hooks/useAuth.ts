import { UserProps } from '@/types';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAuth = () => {};

export default useAuth;

export const useUser = () => {
  return useQuery<UserProps>({
    queryKey: ["fetch-current-user"],
    queryFn: async () => {
      const res = await axios.get("/auth/me");
      return res.data;
    },
  });
};
