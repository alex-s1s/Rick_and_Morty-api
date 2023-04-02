import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/layouts";
import CharacterDetails, { Character } from "@/CharacterDetails/index";
import axios from "axios";
import { api } from "@/service";

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
  const { data: character } = await api.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);

  return {
    props: {
      character,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  const characters = data.results;

  const paths = characters.map((character: Character) => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Details;