import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/layouts';
import { ImageContainer, Detail, DetailsContainer, Title, StyledArrowIcon } from './charcterDetails'
import Link from 'next/link';

export interface Character {
	id: number;
	name: string;
	image: string;
	status: string;
	species: string;
	type?: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	episode: string[];
	created: string;
}

interface CharacterDetailsProps {
	character: Character;
}

const CharacterDetails = ({ character }: CharacterDetailsProps) => {
	const { t } = useTranslation('characterData');

	function formatISODate(isoDate: string) {
		const date = new Date(isoDate);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString();
		return `${day}/${month}/${year}`;
	}

function convertSpacesToUnderscores(value: string): string {
  return value.replace(/ /g, '_');
}

	return (
		<Layout>
			<Link href={`/`}>
					<StyledArrowIcon />
            </Link>
			{character ? (
				<div className="flex flex-col items-center">
					<Title>{character.name}</Title>
					<div className="flex items-center">
						<ImageContainer>
							<Image
								src={character.image}
								alt={character.name}
								layout="fill"
								objectFit="cover"
							/>
						</ImageContainer>
						<DetailsContainer>
							{Object.entries(character).map(([key, value], index) => {
								if (!['name', 'id', 'image', 'url'].includes(key)) {
									return (
										<Detail key={index}>
											{t(`common:character.${key}`)}:{" "}
											<span className="font-bold">
											{key === 'created'
												? formatISODate(value)
												: key === 'episode'
												? value.length
												: typeof value === 'object'
												? (() => {
													const formattedValue = convertSpacesToUnderscores(value.name);
													return t(`character.${key}.${formattedValue}`) || 'N/A';
												})()
												: !value
												? 'N/A'
												: t(`character.${key}.${value}`)}
											</span>
										</Detail>
									);
								}
								return "";
							})}
						</DetailsContainer>
					</div>
				</div>
			) : (
				<Layout>
					<h1>Carregando...</h1>
				</Layout>
			)}
		</Layout>
	);/*  */
}

export default CharacterDetails