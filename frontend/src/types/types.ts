export interface ProductTypes {
    _id?: string;
    title: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    rating: number
}

export interface RegisterData {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthUserTypes {
    id: string;
    name: string,
    username: string,
    email: string,
    password?: string,
    profilePic?: string,
}