import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from '../dto/comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Get()
    async findAll() {
        return this.commentsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.commentsService.findOne(id);
    }

    @Post()
    async create(@Body() createCommentDto: CreateCommentDto) {
        return this.commentsService.create(createCommentDto);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto) {
        return this.commentsService.update(id, updateCommentDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.commentsService.remove(id);
    }
}
