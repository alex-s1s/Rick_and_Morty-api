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

const FavoriteButton = ({ isFavorited, onClick }: { isFavorited: boolean; onClick: () => void }) => (
  <FavoriteIcon onClick={onClick} isFavorited={isFavorited}>
    {isFavorited ? <FaStar /> : <FaRegStar />}
  </FavoriteIcon>
);

const CharacterCard = ({ id, name, status, species, gender, image }: CharacterCardProps) => {
  const { t } = useTranslation('characterData');
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(favorites.some((favorite) => favorite.id === id));

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        id, name, status, species, gender, image,
        type: '',
        origin: {
          name: '',
          url: ''
        },
        location: {
          name: '',
          url: ''
        }
      });
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt={name} />
        <FavoriteButton isFavorited={isFavorited} onClick={handleFavoriteClick} />
      </ImageContainer>
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardText>{`Status: ${t(`characterData:character.status.${status}`)}`}</CardText>
        <CardText>{`Espécie: ${t(`characterData:character.species.${species}`)}`}</CardText>
        <CardText>{`Gênero: ${t(`characterData:character.gender.${gender}`)}`}</CardText>
        <Link href={`/details/${id}`}>
          <CardButton>{t('common:character.viewDetails')}</CardButton>
        </Link>
      </CardContent>
    </CardContainer>
  );
};

export default CharacterCard;
