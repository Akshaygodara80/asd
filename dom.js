function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
}

fetchData().then((data) => console.log(data));
// .catch((error) => console.error(error));
