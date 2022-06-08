import {
  useQuery,
  UseQueryResult,
  QueryClient
} from 'react-query'

export const queryClient = new QueryClient();


//** Unsplash API */
type Photo = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

type ImageUrls = string[]

export const GetUnsplashImg: () => UseQueryResult<string[], Error> = () =>
  useQuery('get-unsplash-images', async () => {
    const url = `https://api.unsplash.com/collections/i-X3O5Jac7E/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    const imageUrls: ImageUrls = []

    const res = await fetch(url);
    const data = await res.json();
    data.forEach((apiResult: Photo) => {
      imageUrls.push(apiResult.urls.regular)
    })
    return imageUrls ?? []
  })