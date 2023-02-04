import { Album, Artist, Track } from 'src/types/apiTypes';

export const filterFavourite = (searchArr, databaseArr) => {
  const response = [];
  searchArr.map((searchId) => {
    return databaseArr.filter((item) => {
      if (item.id === searchId) {
        response.push(item);
      }
    });
  });
  return response;
};
