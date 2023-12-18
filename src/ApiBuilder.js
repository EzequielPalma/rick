
const ApiUrlBuilder = ({ currentPage, nameFilter, statusFilter }) => {
  let url = "https://rickandmortyapi.com/api/character";

  if (currentPage) {
    url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${nameFilter}&status=${statusFilter}`;
  }

  return url;
};

export default ApiUrlBuilder;
