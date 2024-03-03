import { ChangeEvent, ReactNode } from "react";

export interface AuthData {
  id: string;
  token: string;
}

export interface UserData {
  userId: string;
  email: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: ReactNode;
    content: ReactNode;
  }
  export interface FormInputProps {
    label: string;
    type: string;
    value: string;
    required:boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }
 export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
  }
  
  export interface UserAuthData {
    email: string;
    password: string;
  }