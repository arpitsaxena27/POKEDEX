import usePokList from "../hooks/usePokList";
import { useState, useEffect } from "react";

function useBookmark() {
      const { isLoading, pokDisplay, currentPage, totalPages, setCurrentPage } =
            usePokList();
      const [bookmarks, setBookmarks] = useState([]);

      useEffect(() => {
            const savedBookmarks = JSON.parse(
                  localStorage.getItem("bookmarks")
            );
            if (savedBookmarks) {
                  setBookmarks(savedBookmarks);
            }
      }, []);

      useEffect(() => {
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      }, [bookmarks]);

      const toggleBookmark = (pokemon) => {
            if (bookmarks.some((bookmark) => bookmark.id === pokemon.id)) {
                  setBookmarks(
                        bookmarks.filter(
                              (bookmark) => bookmark.id !== pokemon.id
                        )
                  );
            } else {
                  setBookmarks([...bookmarks, pokemon]);
            }
      };

      return {
            isLoading,
            pokDisplay,
            bookmarks,
            toggleBookmark,
            currentPage,
            totalPages,
            setCurrentPage,
      };
}
export default useBookmark;
