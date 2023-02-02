import { HttpException, HttpStatus } from '@nestjs/common';
import { validate as uuidValidate } from 'uuid';

export const checkUuid = (id: string): boolean => {
  if (!uuidValidate(id)) {
    throw new HttpException('User id must be uuid', HttpStatus.BAD_REQUEST);
  }
  return true;
};
