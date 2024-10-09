const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let business = jsObject.business;

    for (let i = 0; i < business.length; i++) {
      // console.log(business[i].name);
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.

      // Creates card and places business name in h2 element
      let card = document.createElement("section");
      // Adds a classname to the section element above
      card.className = "card";
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);
      document.querySelector("div.cards").appendChild(card);

      // Create the image location, you can look up how to add image using javascript
      let img = document.createElement("img");
      img.src = business[i].imageurl;
      card.appendChild(img);
      document.querySelector("div.cards").appendChild(card);

      // Include a business location
      let h3 = document.createElement("h3");
      h3.textContent = business[i].address;
      card.appendChild(h3);
      h3.classList.add("address");

      // Include a business Description
      let para = document.createElement("p");
      para.textContent = business[i].address;
      card.appendChild(para);
      para.classList.add("descript");
    }
  });
