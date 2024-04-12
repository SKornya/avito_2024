import { FunctionComponent } from 'react';
import { MovieCardProps } from '../types';
import { Card, Image } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';

const MovieCard: FunctionComponent<MovieCardProps> = ({ movie }) => {
  const {
    id,
    type,
    name,
    releaseYears,
    movieLength,
    seriesLength,
    poster,
    year,
  } = movie;

  console.log(movie);
  const isSeries = type === ('series' || 'animated-series') && releaseYears;

  return (
    <Card style={{ margin: '10px 0' }}>
      <Image
        preview={false}
        src={poster.previewUrl}
        width={100}
        style={{ borderRadius: '5px' }}
      />

      <Title level={4} style={{ display: 'inline-block' }}>
        <Link to={`${routes.app.film}/${id}`}>{name}</Link>
      </Title>

      {isSeries ? (
        <Text>{`${releaseYears[0].start}-${releaseYears[0].end}, ${seriesLength} мин.`}</Text>
      ) : (
        <Text>{`${year}, ${movieLength} мин.`}</Text>
      )}
    </Card>
  );
};

export default MovieCard;
