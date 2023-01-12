import { useQuery, QueryFunctionContext } from '@tanstack/react-query'
import { api } from "../../services/api"
import { Repo } from './types';

const getRepos = async (context: QueryFunctionContext) => {
  const [, userId] = context.queryKey

  const { data } = await api.get<Repo[]>(`/users/${userId}/repos`)

  return data;
}

export const useFetchRepos = (userId: string) => {
  return useQuery(['repos', userId], getRepos)
}


