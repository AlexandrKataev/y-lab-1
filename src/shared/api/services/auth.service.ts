import { instance } from '../config/axios';
import { User } from '../dto/user.dto';
import { authDto } from '../dto/auth.dto';

export const authService = {
  login: async (authDto: authDto) => {
    console.log(authDto);
    const response = await instance.get<User>(`/users/1`);
    console.log('юзер получен:', response.data);
    return response.data;
  },
};
