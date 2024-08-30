import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.post.findMany();
    }

    async findOne(id: number) {
        return this.prisma.post.findUnique({
            where: { id },
        });
    }

    async create(data: CreatePostDto) {
        return this.prisma.post.create({
            data,
        });
    }

    async update(id: number, data: UpdatePostDto) {
        return this.prisma.post.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        return this.prisma.post.delete({
            where: { id },
        });
    }
}
