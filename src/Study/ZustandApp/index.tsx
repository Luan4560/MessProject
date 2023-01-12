import { useCallback } from "react";
import { useFetchRepos } from "./queries/repos";
import { useFavoriteRepoStore } from "./store/useFavoriteRepos";
import { Card } from "./components/Card";

export const ZustandApp = () => {
  const { data } = useFetchRepos("Luan4560");

  const favoriteRepoIds = useFavoriteRepoStore(
    (state: any) => state.favoriteRepoIds
  );
  const addToFavorites = useFavoriteRepoStore(
    (state: any) => state.addToFavorites
  );
  const removeFromFavorites = useFavoriteRepoStore(
    (state: any) => state.removeFromFavorites
  );

  const handleAddToFavorites = useCallback((repoId: number) => {
    addToFavorites(repoId);
  }, []);

  const handleRemoveFromFavorites = useCallback((repoId: number) => {
    removeFromFavorites(repoId);
  }, []);

  return (
    <>
      {data?.map((repo: any) => (
        <Card
          key={repo.id}
          repo={repo}
          onAddtoFavorites={handleAddToFavorites}
          onRemoveFromFavorites={handleRemoveFromFavorites}
          isFavorite={favoriteRepoIds.includes(repo.id)}
        />
      ))}
    </>
  );
};
