function fetchSimpsonJSON() {
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes?count=1";
    axios.get(url)
        .then(function(response) {
            return response.data;
        })
        .then(function(quotes) {
            for (let quote of quotes) {
                let element = document.querySelector('#simpsons-quote');
                let img = document.createElement('img');
                img.setAttribute('src', quote.image);
                img.setAttribute('alt', quote.character);
                img.style.float = quote.characterDirection.toLowerCase();
                let caption = document.createElement('figcaption');
                caption.innerText = quote.character;
                let text = document.createElement('p');
                text.innerText = quote.quote;

                element.querySelectorAll('*').forEach(n => n.remove());
                element.appendChild(img);
                element.appendChild(caption);
                element.appendChild(text);
            }
        });
}

fetchSimpsonJSON();

document.getElementById("simpsons-button").addEventListener("click", function() {
    fetchSimpsonJSON();
});
