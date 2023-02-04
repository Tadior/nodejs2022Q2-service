import { Injectable } from '@nestjs/common';
import { Album, Artist, Favorites, Track, User } from 'src/types/apiTypes';
interface IDatabase {
  users: User[];
  artists: Artist[];
  tracks: Track[];
  albums: Album[];
  favorites: Favorites;
}
@Injectable()
export class DataBaseService {
  database: IDatabase = {
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
    favorites: {
      artists: [],
      albums: [],
      tracks: [],
    },
  };
}
