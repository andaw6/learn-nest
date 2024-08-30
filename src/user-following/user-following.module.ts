import { Module } from '@nestjs/common';
import { UserFollowingController } from './user-following.controller';
import { UserFollowingService } from './user-following.service';

@Module({
  controllers: [UserFollowingController],
  providers: [UserFollowingService]
})
export class UserFollowingModule {}
