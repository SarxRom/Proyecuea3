// Array de imágenes de ejemplo con rutas relativas a la carpeta 'assets'
images = [
    { src: 'assets/gatoblanco.jpg', caption: 'Imagen 1' },
    { src: 'assets/gigismile.jpg', caption: 'Imagen 2' },
    { src: 'assets/joonie.jpg', caption: 'Imagen 3' },
    { src: 'assets/jinnnn.jpg', caption: 'Imagen 4' },
    { src: 'assets/gatocafe.jpg', caption: 'Imagen 5' },
    { src: 'assets/gatomariguas.jpg', caption: 'Imagen 6' },
    { src: 'assets/imagen7.jpg', caption: 'Imagen 7' },
    { src: 'assets/imagen8.jpg', caption: 'Imagen 8' },
    { src: 'assets/imagen_grande.jpg', caption: 'Imagen Grande' },  // Imagen central más grande
];

// Función para crear un item (tarjeta) con una imagen y su título
function createImageItem(image, isCenter = false) {
    const item = document.createElement('div');
    item.classList.add('item');
    
    // Si la imagen debe ser la del centro, añadimos la clase 'center'
    if (isCenter) {
        item.classList.add('center');
    }
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.caption;

    const caption = document.createElement('div');
    caption.classList.add('caption');
    caption.textContent = image.caption;

    item.appendChild(img);
    item.appendChild(caption);

    return item;
}

// Función para agregar varias imágenes al tablero
function addImagesToBoard(count) {
    const container = document.querySelector('.container');

    // Colocamos una imagen central más grande
    const centerImage = images.pop(); // Sacamos la última imagen del arreglo
    const centerItem = createImageItem(centerImage, true);
    container.appendChild(centerItem);

    // Agregamos las otras imágenes
    for (let i = 0; i < count - 1; i++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const item = createImageItem(randomImage);
        container.appendChild(item);
    }
}

// Cargar imágenes iniciales
addImagesToBoard(8);
