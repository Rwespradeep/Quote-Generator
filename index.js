const quote = document.querySelector("p");
const quoteButton = document.querySelector(".submit-button");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ee93ae120msh33f60a3c9c1154fp108602jsn0efdffef6178',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

const getQuote = () => {

    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then((json) => {
        if(json.content!=null){
            quote.innerHTML = `${json.content}`;
        }
    })   
	.catch(err => console.error(err));
}

quoteButton.addEventListener('click',() =>{
    getQuote();
});