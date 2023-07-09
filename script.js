import { projectData } from './project-data.js';

const floating = document.getElementsByClassName("floating");
const floatingArr = Array.from(floating);
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const projectInfo = document.getElementById("modal-project-info")
const info = document.getElementById("info")
const infoPane = document.getElementById("info-pane");
const hoverInfo = document.getElementById("hover-info");

      let title;
      let artist = null;
      let projectLink;
      let projectImg;
      let artistStatement;
      let projectDescription = null;
      let bio;
      let artistBio

floatingArr.forEach((img, i) => {
  setTimeout(function(){
    img.style.visibility = "visible";
    img.addEventListener("click", () => {
      modal.classList.toggle('hide');

      let data;

      if (projectData && projectData[`${img.id}`]) {
        console.log("DATA", projectData[`${img.id}`]);
        data = projectData[`${img.id}`];
      } else {
        data = {projectName: "none", artistName: "none", videoLink: "", videoHeight: "0", videoWidth: "0", projectDecription: "none"}
      }

      if (artist === null && projectDescription === null) {

        title = document.createElement('h1');
        projectInfo.appendChild(title);
        title.classList.add("modal-project-title");
        title.innerHTML = data.projectName;

        artist = document.createElement('h2');
        projectInfo.appendChild(artist);
        artist.classList.add("modal-artist-name");
        artist.innerHTML = data.artistName;

        projectLink = document.createElement('a');
        projectInfo.appendChild(projectLink);
        projectLink.classList.add("modal-project-link");
        projectLink.href = data.projectLink;
        projectLink.target = "blank";
        projectLink.innerHTML = data.projectLink;


        projectImg = document.createElement('img');
        projectInfo.appendChild(projectImg);
        projectImg.classList.add("modal-project-img");
        projectImg.setAttribute("height", 540);
        projectImg.setAttribute("width", 960);
        projectImg.setAttribute("src", `./assets/img/${data.img}`);

        artistStatement = document.createElement('h3');
        projectInfo.appendChild(artistStatement);
        artistStatement.innerHTML = "<br>Artist Statement:<br>";

        projectDescription = document.createElement('p');
        projectInfo.appendChild(projectDescription);
        projectDescription.innerHTML = data.projectDescription;

        bio = document.createElement('h3');
        projectInfo.appendChild(bio);
        bio.innerHTML = "Artist Bio:";

        artistBio = document.createElement('p');
        projectInfo.appendChild(artistBio);
        artistBio.innerHTML = data.artistBio;

      } else {
        title.innerHTML = data.projectName;

        artist.innerHTML = data.artistName;

        projectLink.href = data.projectLink;
        projectLink.innerHTML = data.projectLink;

        projectImg.setAttribute("src", `./assets/img/${data.img}`);

        projectDescription.innerHTML = data.projectDescription;

        artistBio.innerHTML = data.artistBio;
      }
    });

    img.addEventListener("mouseover", () => {
      let data;

      if (projectData && projectData[`${img.id}`]) {
        console.log("DATA", projectData[`${img.id}`]);
        data = projectData[`${img.id}`];
      } else {
        data = {projectName: "none", artistName: "none", videoLink: "", videoHeight: "0", videoWidth: "0", projectDecription: "none"}
      }

      hoverInfo.innerHTML = `${data.projectName} by ${data.artistName}`;

    });

    img.addEventListener("mouseout", () => {
      hoverInfo.innerHTML = ``;
    });

  }, i * 3000);
});

closeBtn.addEventListener("click", () => {
  modal.classList.toggle('hide');
});

info.addEventListener("click", () => {
  infoPane.classList.toggle('hide');
});

const spiral = document.getElementById("spiral");

spiral.setAttribute("viewBow", `0 0 ${window.innerHeight} ${window.innerHeight}`);

