
const apiKey = "2a4fd1138bd131ee49b25af36d5f763a";

class Event{
  constructor(id = 116) {
    this.id = id;
    this.getData();
  }

  getData() {

    fetch(`http://gateway.marvel.com:80/v1/public/events/${encodeURI(this.id)}?apikey=${apiKey}`)
      .then((response) => {
        return response.json();
      })

      .then((response) => {
        console.log(response);
        let results = response.data.results[0];
        this.title = results.title;
        this.description = results.description;
        this.image = `${results.thumbnail.path}.${results.thumbnail.extension}`;
        this.characters = results.characters.items;
        this.render();

        // console.log(this.image);

      })
  }

  render() {
    let placeholderLeft = document.querySelector("#placeholderLeft");
    let profileImage = document.createElement("img");
    profileImage.classList.add("profileImage");
    profileImage.src = this.image;
    placeholderLeft.appendChild(profileImage);

    let profileName = document.createElement("h2");
    profileName.classList.add("profileName");
    profileName.textContent = this.title;
    placeholderLeft.appendChild(profileName);

    let profileDescription = document.createElement("p");
    profileDescription.classList.add("profileDescription");
    profileDescription.textContent = this.description;
    placeholderLeft.appendChild(profileDescription);

    let characters = this.characters;

    let placeholderRight = document.querySelector("#placeholderRight");
    let eventsHeadline = document.createElement("h1");
    eventsHeadline.textContent = "Characters";
    placeholderRight.appendChild(eventsHeadline);

    characters.forEach((character) => {
      let a = document.createElement("a");
      a.classList.add("itemContainer");
      a.href = `/characters/${character.name}`;
      placeholderRight.appendChild(a);

      let itemTitle = document.createElement("h1");
      itemTitle.classList.add("itemTitle");
      itemTitle.textContent = `${character.name}`;
      a.appendChild(itemTitle);

    })


  }
}

export default Event;
