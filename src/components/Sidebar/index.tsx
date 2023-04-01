import { useFavorites } from '@/context/FavoritesContext';
import { FavoriteImage, FavoriteItem, FavoriteName, FavoriteTitle, SidebarContainer } from './sidebar';

const Sidebar = () => {
  const { favorites } = useFavorites();

  return (
    <SidebarContainer>
      {favorites.map((favorite) => (
        <FavoriteItem key={favorite.id}>
          <FavoriteImage src={favorite.image} alt={favorite.name} />
          <FavoriteName>{favorite.name}</FavoriteName>
        </FavoriteItem>
      ))}
      {favorites.length === 0 && <FavoriteTitle>Nenhum favorito</FavoriteTitle>}
    </SidebarContainer>
  );
};

export default Sidebar;
