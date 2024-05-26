import toast, { Toaster } from 'react-hot-toast';
import { getPhotos } from '../../apiService/photos';
import { useEffect, useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErorrMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [isLoader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState();
  useEffect(() => {
    if (!query) return;
    const handleGallery = async () => {
      try {
        setLoader(true);
        const value = await getPhotos(query, page);
        setGallery(prevState => {
          return [...prevState, ...value.results];
        });
        setTotal(value.total_pages);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoader(false);
      }
    };
    handleGallery();
  }, [page, query]);

  const handleSubmit = value => {
    setGallery([]);
    setQuery(value);
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = image => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
      {query !== '' && (
        <ImageGallery value={gallery} onClickImage={openModal} />
      )}
      {query && total === 0 && <ErorrMessage />}
      {isLoader && <Loader />}
      {gallery.length > 0 && total > page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        isClose={closeModal}
        value={currentImage}
      />
    </>
  );
}
