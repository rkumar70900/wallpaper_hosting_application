const wallpapersContainer = document.getElementById("wallpapers");

async function displayImages() {

const response = await fetch("/filenames", {
    method: "GET",
});

const f = await response.json();

console.log(f);

images(f);

}

function images(f) {
    f.forEach(im => {
        const wallpaperDiv = document.createElement("div");
        wallpaperDiv.classList.add("wallpaper");
        const img = document.createElement("img");
        img.src = '../images/' + im;
        img.alt = "Wallpaper";
        wallpaperDiv.appendChild(img);
        const downloadButton = document.createElement("button");
        downloadButton.classList.add("download");
        downloadButton.textContent = "Download";
        downloadButton.addEventListener("click", function() {
            downloadImage('../images/' + im);
        });
        wallpaperDiv.appendChild(downloadButton);
        
        wallpapersContainer.appendChild(wallpaperDiv);
});
}

function downloadImage(url) {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    link.click();
}

displayImages();

