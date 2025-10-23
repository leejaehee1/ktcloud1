import { PostDto } from './blog.model';

export class BlogService {
  posts: PostDto[] = [];

  getAllPosts(): PostDto[] {
    return this.posts;
  }

  createPost(postDto: PostDto) {
    const id = this.posts.length + 1;
    this.posts.push({ ...postDto, id: id.toString(), createdDt: new Date() });
  }

  getPost(id: string) {
    console.log(`[id: ${id}] 게시글 하나 가져오기`);
  }

  delete(id: string) {
    console.log(`[id: ${id}] 게시글 하나 삭제하기`);
  }

  updatePost(id: string, postDto: PostDto) {
    console.log(`[id: ${id}, postDto: ${postDto.id}] 게시글 하나 수정하기`);
  }
}
