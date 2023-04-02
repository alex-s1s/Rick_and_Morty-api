// components/CharacterCard/index.tsx
import React, { useState } from 'react';
import { CardContainer, CardContent, CardTitle, CardText, CardButton, ImageContainer, Image, FavoriteIcon } from './characterCard';
import useTranslation from 'next-translate/useTranslation';
import { useFavorites } from '@/context/FavoritesContext';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Link from 'next/link';

export interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}

interface CharacterDetailsProps {
  character: CharacterCardProps;
}

export const FavoriteButton = ({ isFavorited, onClick }: { isFavorited: boolean; onClick: () => void }) => (
  <FavoriteIcon onClick={onClick} isFavorited={isFavorited}>
    {isFavorited ? <FaStar /> : <FaRegStar />}
  </FavoriteIcon>
);

const CharacterCard = ({ character }: CharacterDetailsProps) => {
  const { t } = useTranslation('characterData');
  const { favorites, toggleFavorite } = useFavorites();
  const [ isFavorited, setIsFavorited] = useState(favorites.some((favorite) => favorite.id === character.id));

  const handleFavoriteClick = () => {
    toggleFavorite(character);
    setIsFavorited(!isFavorited);
  };

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={character.image} alt={character.name} />
        <FavoriteButton isFavorited={isFavorited} onClick={handleFavoriteClick} />
      </ImageContainer>
      <CardContent>
        <CardTitle>{character.name}</CardTitle>
        <CardText>{`Status: ${t(`characterData:character.status.${character.status}`)}`}</CardText>
        <CardText>{`Espécie: ${t(`characterData:character.species.${character.species}`)}`}</CardText>
        <CardText>{`Gênero: ${t(`characterData:character.gender.${character.gender}`)}`}</CardText>
        <Link href={`/details/${character.id}`}>
          <CardButton>{t('common:character.viewDetails')}</CardButton>
        </Link>
      </CardContent>
    </CardContainer>
  );
};

export default CharacterCard;
