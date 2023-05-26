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
    getUsers: (page: number, collapse: boolean) => Promise<void>;
    loading: boolean;
    totalPages: number;
}