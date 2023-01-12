import { Repo } from "../../queries/repos/types";
import "./styles.css";

type CardProps = {
  repo: Repo;
  isFavorite: boolean;
  onAddtoFavorites: (id: number) => void;
  onRemoveFromFavorites: (id: number) => void;
};

export const Card = ({
  repo,
  onAddtoFavorites,
  isFavorite,
  onRemoveFromFavorites,
}: CardProps) => {
  const handleToggleFavorite = () => {
    if (isFavorite) {
      onRemoveFromFavorites(repo.id);
    } else {
      onAddtoFavorites(repo.id);
    }
  };

  return (
    <div className="card">
      <h2>{repo.name}</h2>
      <div className="card-buttons">
        <button onClick={handleToggleFavorite}>
          {isFavorite ? "Add to favorites" : "Remove from favorites"}
        </button>
      </div>
    </div>
  );
};
