import toast from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.search.value.trim();
    if (!value) {
      toast.error('Enter your query, please.');
      return;
    }
    onSubmit(value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
