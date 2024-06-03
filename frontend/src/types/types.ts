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
