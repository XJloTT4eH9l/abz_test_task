export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: string;
    position: string;
    position_id: number;
    registration_timestamp: number;
}

export interface IUsersContext {
    users: IUser[];
    loading: boolean;
    totalPages: number;
    token: string;
    getUsers: (page: number, collapse: boolean) => Promise<void>;
    getToken: () => Promise<void>;
}