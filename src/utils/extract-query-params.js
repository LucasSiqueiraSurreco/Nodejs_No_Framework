// ?search=UserName&page=2
export function extractQueryParams(query) {
  return query
    .substr(1)
    .splide("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;

      return queryParams;
    }, {});
}
