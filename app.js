const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    console.log(form.elements);
  const res =  await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  const img = document.createElement('IMG');
//   console.log(res.data);

  img.src = res.data[0].show.image.medium; 
  document.body.append(img);
})