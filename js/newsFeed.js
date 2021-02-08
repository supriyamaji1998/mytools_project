// console.log('this is java script news project...');

const newsAccordion = document.getElementById('accordionNews');
const APIKey = 'ada9aff0f48406f4e2a54067a7bc909d';
const APIKey1 = '1a51ef6102ed78e32969618c2258dc89';
const APIKey2 = '155cf00389a2c544311e86c70edb8684';
const xhr = new XMLHttpRequest();


function fetchSearch(val){
    // console.log('===================='+test);
    if(val != ""){
    event.preventDefault();
    xhr.open('GET', `https://gnews.io/api/v4/search?q=${val}&token=${APIKey2}&lang=en`, true);
    xhr.send();
    }
    else{
        alert("Search value is Empty!!!");
        xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${APIKey2}&lang=en&country=in`, true);
        xhr.send();
    }
}
function fetchTopic(topic){
    // console.log('===================='+topic);
    event.preventDefault();
    xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${APIKey2}&lang=en&topic=${topic}`, true);
    xhr.send();
}

xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${APIKey2}&lang=en&country=in`, true);
xhr.send();
xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let str = "";
        console.log(articles);
        articles.forEach(function (element, index) {
            // console.log(articles.news);
            // console.log(element.urlToImage);

            let news = `<div class="card">
                            
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}" >
                                   <b>News No. ${index + 1}:</b>${articles[index].title}
                                </button>
                                <p style="font-size:12px;">&nbsp&nbsp&nbsp Published on : ${articles[index].publishedAt}</p> 
                                </h2>
                                <p >${articles[index].description}</p>
                            </div>
                            

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionNews">
                            <img src="${articles[index].image}"  class="rounded mx-auto d-block my-2" alt="..." height="30%" width="50%">
                                <div class="card-body"> ${articles[index].content}. <a href="${articles[index].url}" style="text-decoration:none;" target="_blank"  >Click here to learn more</a>  </div>
                            </div>
                        </div>`;
            str += news;
        });
        newsAccordion.innerHTML = str;
    } else {
        alert("Some Error occured!!! please try again...");
    }
}