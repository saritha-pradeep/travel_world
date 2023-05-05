import apis from "./apis";
async function fetchAPI({ url, method = "GET",...params }) {
  return await fetch(url, { method ,...params})
    .then((res) => res.json())
    .catch((err) => err)
    .finally((res) => res);
}
export { fetchAPI, apis };
