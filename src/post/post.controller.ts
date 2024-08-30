import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { PostsService } from './post.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Get()
    async findAll() {
        return this.postsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.postsService.findOne(id);
    }

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {
        return this.postsService.create(createPostDto);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.update(id, updatePostDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.postsService.remove(id);
    }
}
