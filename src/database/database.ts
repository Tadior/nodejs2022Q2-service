import { Album, Artist, Favorites, Track, User } from 'src/types/apiTypes';
interface IDatabase {
  users: User[];
  artists: Artist[];
  tracks: Track[];
  albums: Album[];
  favourites: Favorites[];
}

export const database: IDatabase = {
  users: [
    {
      id: 'fdfgf',
      login: 'login',
      password: 'somePass',
      version: 9,
      createdAt: 10,
      updatedAt: 11,
    },
  ],
  artists: [],
  tracks: [],
  albums: [],
  favourites: [],
};
