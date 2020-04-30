function toQuery(queryobj) {
  return Object.keys(queryobj).map((key) => {
    let query = `${key}=${queryobj[key]}`;
    return query;
  }, []).join('&');
}

module.exports = {
  toQuery,
}