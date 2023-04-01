// components/Sidebar.tsx
import styled from 'styled-components';
import { useFavorites } from '@/context/FavoritesContext';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: #f1f1f1;
  box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

const FavoriteTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
`;

const FavoriteItem = styled.div`
  padding: 5px;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FavoriteImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const FavoriteName = styled.span`
  font-size: 1rem;
`;

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
