// pages/character/[id].tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/layouts';
import Image from 'next/image';

interface Character {
  id: number;
  name: string;
  image: string;
}

const CharacterDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      const data: Character = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  return (
     <Layout>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      {/* Render more character details here */}
    </Layout>
  );
};

export default CharacterDetails;