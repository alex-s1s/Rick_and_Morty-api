import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/layouts';
import CharacterDetails, { Character } from '@/CharacterDetails/index';

interface DetailsProps {
  character: Character;
}

const Details = ({ character }: DetailsProps) => {
  return (
    <Layout>
      <CharacterDetails character={character} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<DetailsProps> = async ({ params }) => {
  const id = params?.id;
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character: Character = await response.json();

  return {
    props: {
      character,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  const characters = data.results;

  const paths = characters.map((character: Character) => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Details;