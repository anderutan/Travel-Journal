import MapIcon from './map-location.svg';

export default function Card(location) {
  return (
    <div className='location--card'>
      <img
        src={location.imageUrl}
        alt={location.title}
        className='location--img'
      />
      <div className='location--info'>
        <a href={location.googleMapsUrl} className='location--map'>
          <img src={MapIcon} alt='Location Pin' /> {location.location}{' '}
          <span>View on Google Maps</span>
        </a>
        <h2 className='location--title'>{location.title}</h2>
        <p className='location--date'>
          {location.startDate} - {location.endDate}
        </p>
        <p className='location--description'>{location.description}</p>
      </div>
    </div>
  );
}
