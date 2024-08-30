export class CreatePostDto {
    content: string;
    authorId: number;
}

export class UpdatePostDto {
    content?: string;
}
