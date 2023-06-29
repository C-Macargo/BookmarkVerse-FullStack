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
