import React from 'react';
import { useRecoilState } from 'recoil';
import { searchTermAtom } from '../atoms/searchTermAtom';
import styles from '../styles/SearchBox.module.css'; // Import CSS styles
import postData from '@/src/utils/requests';

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform search logic here
    postData("/customerInput", {mydata: searchTerm}).then((data) => {
      console.log(data);
    });
    console.log('Search term:', searchTerm);
    // Reset the search term
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
