export type TUser = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  role: "user" | "admin";
  password: string;
  phone: string;
  address: string;
};
