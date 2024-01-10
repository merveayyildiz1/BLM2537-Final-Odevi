function openModal(imagePath) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = imagePath;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}