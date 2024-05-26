import Modal from 'react-modal';
// import css from './ImageModal.module.css';
export default function ImageModal({ isOpen, isClose, value }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={isClose}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        {value && <img src={value.urls.regular} alt={value.alt_description} />}
        {/* {value && (
          <div className={css.image}>
            <p>Udername: {value.user.username}</p>
            <p>Likes: {value.likes}</p>
          </div>
        )} */}
      </Modal>
    </>
  );
}
