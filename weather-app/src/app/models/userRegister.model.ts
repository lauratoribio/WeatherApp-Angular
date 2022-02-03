export interface UserLogin {
    name: string;
    password: string;
}

export interface UserRegister {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string
}