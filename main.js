const projects = [
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/jamalbrowning", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jamalbrowning"
  },
];
const printToDom = (selector, textToPrint) => {
  console.log('in printToDom', selector , textToPrint)
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
};



  const createProjectCards = (obj) => {
    
    let domString = '';
    
      
      for (let i = 0;i < obj.length; i++){
        if (obj[i].available === true) {
        domString += '<div class="availableProjects">';
        domString += `<span class="cardTitle"><h3 >${obj[i].title}</h3></span>`;
        domString += `<img src="${obj[i].screenshot}>" alt="${obj[i].title}"`;
        domString += `<p>${obj[i].description}</p>`;
        domString += `<h3><a href="${obj[i].url}">Live Site<a/></h3>`;
        domString += `<h3><a href="${obj[i].githubUrl}"><i class="fa fa-github"></i><a/></h3>`;
        domString += '</h3>';
      }
      }
      printToDom('#projectCards', domString)
     
  }

const init = () => {
  createProjectCards(projects);
}
init()
