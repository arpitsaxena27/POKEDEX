function Buttons({ currentPage, totalPages, setCurrentPage }) {
      const handlePageChange = (newPage) => {
            setCurrentPage(newPage);
      };

      if (totalPages === 0) {
            return null;
      }
      function multibutton() {
            const pages = [];
            const maxVisibleButtons = 5;
            let startPage = currentPage - Math.floor(maxVisibleButtons / 2);
            startPage = Math.max(startPage, 1);
            const endPage = Math.min(
                  startPage + maxVisibleButtons - 1,
                  totalPages
            );
            if (startPage > 1) {
                  pages.push(
                        <button
                              key={1}
                              className="join-item lg:btn md:btn btn-sm "
                              onClick={() => handlePageChange(1)}
                        >
                              1
                        </button>
                  );
                  if (startPage > 2) {
                        pages.push(
                              <button
                                    key={"ellipsis-start"}
                                    className="join-item lg:btn md:btn btn-sm  lg:btn md:btn btn-sm -disabled"
                              >
                                    ...
                              </button>
                        );
                  }
            }
            for (let i = startPage; i <= endPage; i++) {
                  pages.push(
                        <button
                              key={i}
                              className={`join-item lg:btn md:btn btn-sm  ${
                                    i === currentPage ? "lg:btn md:btn btn-sm -active" : ""
                              }`}
                              onClick={() => handlePageChange(i)}
                        >
                              {i}
                        </button>
                  );
            }
            if (endPage < totalPages) {
                  if (endPage < totalPages - 1) {
                        pages.push(
                              <button
                                    key={"ellipsis-end"}
                                    className="join-item lg:btn md:btn btn-sm  lg:btn md:btn btn-sm -disabled"
                              >
                                    ...
                              </button>
                        );
                  }
                  pages.push(
                        <button
                              key={totalPages}
                              className="join-item lg:btn md:btn btn-sm "
                              onClick={() => handlePageChange(totalPages)}
                        >
                              {totalPages}
                        </button>
                  );
            }
            return <div className="join shadow-md shadow-gray-700 mt-10">{pages}</div>;
      }

      return (
            <div className="flex justify-center items-center gap-10">
                  {multibutton()}
            </div>
      );
}

export default Buttons;
