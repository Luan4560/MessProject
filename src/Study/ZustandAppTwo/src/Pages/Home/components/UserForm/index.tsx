import { useUserStore } from "../../../../store/user";

export const UserFrom = () => {
  const addUser = useUserStore((state) => state.addUser);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    addUser({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Create User</button>
    </form>
  );
};
