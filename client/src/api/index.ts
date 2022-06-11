import {
  useQuery,
  UseQueryResult,
  QueryClient
} from 'react-query'

export const queryClient = new QueryClient();

//** Projects */
export type Skill = {
  id: number
  name: string
  picture: string
}

export type Project = {
  id: number
  name: string
  description: string
  gitHub?: string
  deploy?: string
  pictures: string[]
  date?: string
  assigned_skills?: Skill[]
}



export const GetUserProjects: () => UseQueryResult<Project[], Error> = () =>
  useQuery('projects', async () => {
    console.log('Getting projects...')
    const url = `/api/projects`

    const res = await fetch(url);
    const data = await res.json();
    return data as Project[]
  }, {
    retry: false
  })

export const GetUserProject: (id: string) => UseQueryResult<Project, Error> = (id) =>
  useQuery('project', async () => {
    console.log(`Getting project with id ${id}`)
    const url = `/api/projects/${id}`

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data
  }, {
    retry: false
  })

//** Unsplash API */
export type Photo = {
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
    if (process.env.NODE_ENV !== 'production') return
    console.log('Getting unsplash images...')
    const url = `https://api.unsplash.com/collections/i-X3O5Jac7E/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    const imageUrls: ImageUrls = []

    const res = await fetch(url);
    const data = await res.json();
    data.forEach((apiResult: Photo) => {
      imageUrls.push(apiResult.urls.regular)
    })
    return imageUrls ?? []
  })