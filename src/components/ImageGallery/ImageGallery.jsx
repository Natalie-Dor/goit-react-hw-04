import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ gallery, onClickImage }) {
  return (
    <ul className={css.list}>
      {gallery.map(item => (
        <li key={item.id}>
          <ImageCard onClickImage={onClickImage} item={item} />
        </li>
      ))}
    </ul>
  );
}
