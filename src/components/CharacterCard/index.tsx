// components/CharacterCard/index.tsx
import Image from 'next/image';
import React from 'react';
import { CardContainer, CardTitle, CardButton } from './characterCard';

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, image }) => {
  console.log()
  return (
    <CardContainer>
      {/* <img src={image} alt={name}  width={200} height={200}/> */}
     <Image
        src={image}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <CardTitle>{name}</CardTitle>
      <CardButton onClick={() => console.log('Character', id, 'favorited')}>
        Favorite
      </CardButton>
    </CardContainer>
  );
};

export default CharacterCard;