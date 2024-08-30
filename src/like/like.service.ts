import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLikeDto } from '../dto/like.dto';

@Injectable()
export class LikesService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.like.findMany();
    }

    async create(data: CreateLikeDto) {
        return this.prisma.like.create({
            data,
        });
    }

    async remove(id: number) {
        return this.prisma.like.delete({
            where: { id },
        });
    }
}
