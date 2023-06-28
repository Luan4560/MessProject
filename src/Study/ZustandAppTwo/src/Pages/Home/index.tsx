import { useUserStore } from "../../store/user";
import { UserFrom } from "./components/UserForm";

export const ZustandAppTwo = () => {
  const { users } = useUserStore((state) => state);

  return (
    <>
      <h1>Zustand App Two</h1>
      <UserFrom />

      {users.map((user) => (
        <p>
          {user.name} - {user.email}
        </p>
      ))}
    </>
  );
};
