export const fetchData = async () => {
  try {
    const response = await fetch("https://rhinotest.github.io/rhinoTest/LibraryList.json");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
