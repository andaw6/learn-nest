// user-following.controller.ts
import { Controller, Post, Delete, Param, Get, ParseIntPipe, Body } from '@nestjs/common';
import { UserFollowingService } from './user-following.service';

@Controller('user-following')
export class UserFollowingController {
    constructor(private readonly userFollowingService: UserFollowingService) { }

    // Follow a user
    @Post('follow')
    async followUser(
        @Body('followerId', ParseIntPipe) followerId: number,
        @Body('followingId', ParseIntPipe) followingId: number,
    ) {
        return this.userFollowingService.followUser(followerId, followingId);
    }

    // Unfollow a user
    @Delete('unfollow')
    async unfollowUser(
        @Body('followerId', ParseIntPipe) followerId: number,
        @Body('followingId', ParseIntPipe) followingId: number,
    ) {
        return this.userFollowingService.unfollowUser(followerId, followingId);
    }

    // Get followers of a user
    @Get('followers/:userId')
    async getFollowers(
        @Param('userId', ParseIntPipe) userId: number,
    ) {
        return this.userFollowingService.getFollowers(userId);
    }

    // Get users that a user is following
    @Get('following/:userId')
    async getFollowing(
        @Param('userId', ParseIntPipe) userId: number,
    ) {
        return this.userFollowingService.getFollowing(userId);
    }
}
