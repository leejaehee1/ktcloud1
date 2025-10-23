import { PostDto } from './blog.model';
// import * as fs from 'fs';

export interface BlogRepository {
  getAllPosts(): Promise<PostDto[]>;
  createPost(postDto: PostDto);
  getPost(id: string): Promise<PostDto>;
  delete(id: string): Promise<void>;
  updatePost(id: string, postDto: PostDto): Promise<PostDto>;
}

export class BlogRepositoryImpl implements BlogRepository {
  // FILE_NAME = './src/blog.json';

  getAllPosts(): Promise<PostDto[]> {
    // const datas = await fs.readFile(this.FILE_NAME, 'utf-8');
    // const posts = JSON.parse(datas.toString);
    // return posts;
    // return [] as PostDto[];
    return Promise.resolve([]);
  }

  createPost(postDto: PostDto) {
    return Promise.resolve(postDto);
  }

  getPost(id: string): Promise<PostDto> {
    return Promise.resolve({ id, title: '', content: '', name: '' } as PostDto);
  }

  delete(id: string): Promise<void> {
    console.log(`[id: ${id}] 게시글 삭제`);
    return Promise.resolve();
  }

  updatePost(id: string, postDto: PostDto): Promise<PostDto> {
    return Promise.resolve(postDto);
  }
}
