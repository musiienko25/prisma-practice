import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(
    private prismService: PrismaService
  ){}
  getUsers(): User[] {
    return 
  }
}
