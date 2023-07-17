export interface registerRequestBody {
  email: string;
  password: string;
  name: string;
  image_url: string;
}

export interface loginRequestBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  userData: {
    id: number;
    image_url: string;
  };
  token: string;
}

export interface apiBook {
  id: string;
  volumeInfo: VolumeInfo;
}

interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publishedDate?: string;
  description?: string;
  language?: string;
  imageLinks?: ImageLinks;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
