let getdata = async (url) => {
  try {
    let res = await fetch(url);

    let data = await res.json();

    return data.meals;
  } catch (err) {
    console.log(err)
  }
};

let append = (data,container) => {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "div");

    let img = document.createElement("img");
    img.src = el.strMealThumb;

    let name = document.createElement("p");
    name.textContent = el.strMeal;
    name.setAttribute("class", "name");

    let p = document.createElement("p");
    p.innerText = el.strInstructions;

    div.append(img,name, p);

    container.append(div);
  });
};


export {getdata,append}