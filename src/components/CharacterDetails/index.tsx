import { useState } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Layout from '@/layouts';
import { ImageContainer, Detail, DetailsContainer, Title, StyledArrowIcon } from './charcterDetails'
import Link from 'next/link';
import { CharacterCardProps, FavoriteButton } from '../CharacterCard';
import { useFavorites } from '@/context/FavoritesContext';


export interface CharacterDetailsProps {
	character: CharacterCardProps;
}

const CharacterDetails = ({ character }: CharacterDetailsProps) => {
	const { t } = useTranslation('characterData');
	const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
	const [isFavorited, setIsFavorited] = useState(favorites.some((favorite) => favorite.id === character.id));

	const handleFavoriteClick = () => {
		if (isFavorited) {
			removeFromFavorites(character.id);
		} else {
			addToFavorites({
				id: character.id,
				name: character.name,
				status: character.status,
				species: character.species,
				gender: character.gender,
				image: character.image,
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

	function formatISODate(isoDate: string) {
		const date = new Date(isoDate);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear().toString();
		return `${day}/${month}/${year}`;
	}

	function convertSpacesToUnderscores(value: string): string {
		return value.replace(/ /g, '_').replace(/\./g, '');
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
							<FavoriteButton isFavorited={isFavorited} onClick={handleFavoriteClick} />
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