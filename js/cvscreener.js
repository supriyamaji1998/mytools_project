// console.log("this is cv screener project");

const data = [
    {
        Name : "Supriya Maji",
        Age : 18,
        City : "Kolkata", 
        Language : "Python",
        Framework : "Django",
        Image : "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        Name : "rohan Maji",
        Age : 19,
        City : "Delhi", 
        Language : "JavaScript",
        Framework : "reacJs",
        Image : "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        Name : "priya Maji",
        Age : 17,
        City : "Kolkata", 
        Language : "Python",
        Framework : "Django",
        Image : "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        Name : "Mohini Das",
        Age : 22,
        City : "Mumbai", 
        Language : "java",
        Framework : "null",
        Image : "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
        Name : "rita mahato",
        Age : 18,
        City : "Ranchi", 
        Language : "Python",
        Framework : "Flask",
        Image : "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        Name : "riju shing",
        Age : 25,
        City : "punjab", 
        Language : "Php",
        Framework : "none",
        Image : "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        Name : "jasmin roy",
        Age : 48,
        City : "England", 
        Language : "Python",
        Framework : "Flask",
        Image : "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        Name : "riya mahato",
        Age : 21,
        City : "siliguri", 
        Language : "Python",
        Framework : "Flask",
        Image : "https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        Name : "Rehan paul",
        Age : 28,
        City : "jalpaiguri", 
        Language : "JavaScript",
        Framework : "pug",
        Image : "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
        Name : "baisali roy",
        Age : 18,
        City : "Ranchi", 
        Language : "Python",
        Framework : "Flask",
        Image : "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        Name : "mita mahato",
        Age : 19,
        City : "hariyana", 
        Language : "Python",
        Framework : "Flask",
        Image : "https://randomuser.me/api/portraits/women/78.jpg"
    },
    {
        Name : "hiya jasmin",
        Age : 38,
        City : "bihar", 
        Language : "java",
        Framework : "none",
        Image : "https://randomuser.me/api/portraits/women/70.jpg"
    }
];

// itterator cv 

function cvIterattor(profiles) {

    let nextIndex = 0;
    return {
        next : function() {
                if(nextIndex < profiles.length){
                    return {
                        value: profiles[nextIndex++],
                        done : false
                    };
                }else{
                    return {done : true};
                }
        }
    };
}

const candidate = cvIterattor(data);
nextCv();

const next = document.getElementById("next");

next.addEventListener("click",nextCv);


function nextCv() {
    {
          const currentcandidate = candidate.next().value;
        
        let image = document.getElementById('image');
        let profile = document.getElementById('profile');
        if(currentcandidate != undefined){
        image.innerHTML = `<img src='${currentcandidate.Image}'>`;
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item  list-group-item-action active" aria-current="true">Candidate Name : ${currentcandidate.Name}</li>
        <li class="list-group-item list-group-item-action ">Age : ${currentcandidate.Age}</li>
        <li class="list-group-item list-group-item-action ">Location : ${currentcandidate.City}</li>
        <li class="list-group-item list-group-item-action ">Primary Language : ${currentcandidate.Language}</li>
        <li class="list-group-item list-group-item-action ">Framework : ${currentcandidate.Framework}</li>
      </ul>`;}
      else{
          if(confirm("All Applications are viewed,click 'OK' to review")){
            window.location.reload();
          }
          
          
      }
    
    }
    
}