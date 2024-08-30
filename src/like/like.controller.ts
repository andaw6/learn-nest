import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateLikeDto } from '../dto/like.dto';
import { LikesService } from './like.service';

@Controller('likes')
export class LikesController {
    constructor(private readonly likesService: LikesService) { }

    @Get()
    async findAll() {
        return this.likesService.findAll();
    }

    @Post()
    async create(@Body() createLikeDto: CreateLikeDto) {
        return this.likesService.create(createLikeDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.likesService.remove(id);
    }
}
