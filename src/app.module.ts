import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import { UserFollowingModule } from './user-following/user-following.module';

@Module({
  imports: [UsersModule, UserModule, PostModule, LikeModule, CommentModule, UserFollowingModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
