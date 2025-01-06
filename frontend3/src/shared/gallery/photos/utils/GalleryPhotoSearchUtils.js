'use client';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

export const useGalleryPhotoSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const performSearch = async (term) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/photos/search?q=${term}`);
      setSearchResults(response.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((term) => {
      if (term.length >= 2) {
        performSearch(term);
      } else {
        setSearchResults([]);
      }
    }, 500),
    []
  );

  const handleSearch = useCallback((e) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  }, [debouncedSearch]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (searchTerm) {
      await performSearch(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return {
    searchTerm,
    searchResults,
    loading,
    error,
    handleSearch,
    handleSubmit
  };
};
