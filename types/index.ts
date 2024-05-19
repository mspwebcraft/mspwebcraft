export interface ChildrenProp {
  children: React.ReactNode;
}

export interface UserProps {
  _id:string
  name: string;
  email: string;
  password:string;
  mobile: string;
  image?: string;
  role: string;
  isSuper: boolean;
  designation: string;
}
