let images = [
    {
        "h1": "Un super titre ", 
        "p": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien dolor, pellentesque vitae dignissim in, sollicitudin nec diam. Donec vitae accumsan enim, id malesuada ex. Pellentesque odio turpis, iaculis id sodales vel, placerat vitae augue. Fusce porta sem fringilla sagittis venenatis. Nulla a neque in purus porta molestie in tempor nunc. Morbi velit neque, cursus ac commodo non, elementum at dui. Pellentesque eget porttitor tellus. Nulla varius sollicitudin ultrices.",  
        "Image": "assets/img/img-01.jpg"
    },
  
    {
        "h1": "Un super titre ",  
        "p": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien dolor, pellentesque vitae dignissim in, sollicitudin nec diam. Donec vitae accumsan enim, id malesuada ex. Pellentesque odio turpis, iaculis id sodales vel, placerat vitae augue. Fusce porta sem fringilla sagittis venenatis. Nulla a neque in purus porta molestie in tempor nunc. Morbi velit neque, cursus ac commodo non, elementum at dui. Pellentesque eget porttitor tellus. Nulla varius sollicitudin ultrices.",  
        "Image": "assets/img/img-02.jpg"
    },
  
    {
        "h1": "Un super titre ", 
        "p": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien dolor, pellentesque vitae dignissim in, sollicitudin nec diam. Donec vitae accumsan enim, id malesuada ex. Pellentesque odio turpis, iaculis id sodales vel, placerat vitae augue. Fusce porta sem fringilla sagittis venenatis. Nulla a neque in purus porta molestie in tempor nunc. Morbi velit neque, cursus ac commodo non, elementum at dui. Pellentesque eget porttitor tellus. Nulla varius sollicitudin ultrices.",   
        "Image": "assets/img/img-03.jpg"
    },

    {
        "h1": "Un super titre ", 
        "p": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien dolor, pellentesque vitae dignissim in, sollicitudin nec diam. Donec vitae accumsan enim, id malesuada ex. Pellentesque odio turpis, iaculis id sodales vel, placerat vitae augue. Fusce porta sem fringilla sagittis venenatis. Nulla a neque in purus porta molestie in tempor nunc. Morbi velit neque, cursus ac commodo non, elementum at dui. Pellentesque eget porttitor tellus. Nulla varius sollicitudin ultrices.",  
        "Image": "assets/img/img-04.jpg"
    },

    {
        "h1": "Un super titre ", 
        "p": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien dolor, pellentesque vitae dignissim in, sollicitudin nec diam. Donec vitae accumsan enim, id malesuada ex. Pellentesque odio turpis, iaculis id sodales vel, placerat vitae augue. Fusce porta sem fringilla sagittis venenatis. Nulla a neque in purus porta molestie in tempor nunc. Morbi velit neque, cursus ac commodo non, elementum at dui. Pellentesque eget porttitor tellus. Nulla varius sollicitudin ultrices.",  
        "Image": "assets/img/img-05.jpg"
    }
]

  
   



for(let keys of images){
    let elment = document.createElement('div')
    let divflex = document.createElement('div')
    let img = document.createElement("img");
    let h1 = document.createElement("h2")
    let p = document.createElement("p")
    img.src = keys.Image;
    img.style.width = "35%";
    elment.appendChild(img);
    elment.appendChild(h1);
    elment.appendChild(p)
    elment.appendChild(divflex)
    elment.setAttribute("class" , "d-flex-image-h2")
    divflex.setAttribute("class" , "h2-p")
    let textp = document.createTextNode(keys.p)
    let text = document.createTextNode(keys.h1)
    h1.appendChild(text)
    p.appendChild(textp)
    divflex.appendChild(h1)
    divflex.appendChild(p)
    let d = document.getElementById('d-flex-js');
    d.appendChild(elment);
}