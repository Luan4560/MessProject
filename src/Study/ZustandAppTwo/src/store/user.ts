import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';

interface UserProps {
  name: string;
  email: string;
}

interface UseUserProps {
  users: UserProps[];
  addUser: (user: UserProps) => void;
}

export const useUserStore = create<UseUserProps>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        addUser: (user: UserProps) => {
          set(state => ({ users: [...state.users, user] }))
        }
      }),
      { name: 'user-store' }
    )
  )
)



