import { nav } from "./styles.js";

export const Pagination = ({ cardPerPage, totalCards, paginate }: any) => {
  const pageNumbers = [];
  // const widthForElement = window.screen.width > 768;

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav className={nav()}>
        {pageNumbers.map((pageNumber) => (
          <button onClick={() => paginate(pageNumber)} key={pageNumber}>
            {pageNumber}
          </button>
        ))}
      </nav>
    </>
  );
};
