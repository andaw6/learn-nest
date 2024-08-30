export class CreateCommentDto {
    content: string;
    authorId: number;
    postId: number;
}

export class UpdateCommentDto {
    content?: string;
}
