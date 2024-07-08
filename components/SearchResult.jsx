import { booksData } from "@/lib/data.js";
function SearchResult({ category }) {
  const filteredData = booksData.filter((book) => {
    return book.category === category;
  });
  return (
    <div>
      {filteredData.map((e, i) => (
        <div key={i}></div>
      ))}
    </div>
  );
}

export default SearchResult;
