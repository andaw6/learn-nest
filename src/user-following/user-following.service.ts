// user-following.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserFollowingService {
    constructor(private readonly prisma: PrismaService) { }

    // Follow a user
    async followUser(followerId: number, followingId: number) {
        // Check if the follower and following users exist
        const follower = await this.prisma.user.findUnique({ where: { id: followerId } });
        const following = await this.prisma.user.findUnique({ where: { id: followingId } });

        if (!follower || !following) {
            throw new NotFoundException('User not found');
        }

        // Check if already following
        const existingFollow = await this.prisma.userFollowing.findUnique({
            where: {
                followerId_followingId: {
                    followerId,
                    followingId,
                },
            },
        });

        if (existingFollow) {
            throw new ConflictException('Already following this user');
        }

        // Create the follow relationship
        return this.prisma.userFollowing.create({
            data: {
                followerId,
                followingId,
            },
        });
    }

    // Unfollow a user
    async unfollowUser(followerId: number, followingId: number) {
        const followRelation = await this.prisma.userFollowing.findUnique({
            where: {
                followerId_followingId: {
                    followerId,
                    followingId,
                },
            },
        });

        if (!followRelation) {
            throw new NotFoundException('Follow relationship not found');
        }

        return this.prisma.userFollowing.delete({
            where: {
                followerId_followingId: {
                    followerId,
                    followingId,
                },
            },
        });
    }

    // Get followers of a user
    async getFollowers(userId: number) {
        return this.prisma.userFollowing.findMany({
            where: {
                followingId: userId,
            },
            include: {
                follower: true,
            },
        });
    }

    // Get users that a user is following
    async getFollowing(userId: number) {
        return this.prisma.userFollowing.findMany({
            where: {
                followerId: userId,
            },
            include: {
                following: true,
            },
        });
    }
}
