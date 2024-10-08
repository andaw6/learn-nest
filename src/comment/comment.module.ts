import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comments.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
