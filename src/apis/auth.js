import axios from "../helpers/axios";

const AuthApi = {
  login: async (user) => {
    const res = await axios.post(`/admin/signin`, {
      ...user,
    });
    return res;
  },
};

export default AuthApi;
