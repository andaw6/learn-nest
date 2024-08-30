import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from '../dto/comment.dto';

@Injectable()
export class CommentsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.comment.findMany();
    }

    async findOne(id: number) {
        return this.prisma.comment.findUnique({
            where: { id },
        });
    }

    async create(data: CreateCommentDto) {
        return this.prisma.comment.create({
            data,
        });
    }

    async update(id: number, data: UpdateCommentDto) {
        return this.prisma.comment.update({
            where: { id },
            data,
        });
    }

    async remove(id: number) {
        return this.prisma.comment.delete({
            where: { id },
        });
    }
}
