const shopButton = document.getElementById("shopButton");

shopButton.addEventListener("click", function() {
    console.log("Shop Now button clicked!");
});

const blackPepper = document.getElementById("blackPepper");

blackPepper.addEventListener("click", function() {
    document.getElementById("product-info").innerHTML =
        "<h3>Black Pepper</h3><p>Bold and aromatic, perfect for adding rich flavor to meals.</p>";
});

const cinnamon = document.getElementById("cinnamon");

cinnamon.addEventListener("click", function() {
    document.getElementById("product-info").innerHTML =
        "<h3>Cinnamon</h3><p>Warm and aromatic, cinnamon adds a rich and comforting flavor to meals and drinks.</p>";
});

const cloves = document.getElementById("cloves");

cloves.addEventListener("click", function() {
    document.getElementById("product-info").innerHTML =
        "<h3>Cloves</h3><p>Rich and aromatic cloves that add warm flavor to cooking and spice blends.</p>";
});

const chaiMasala = document.getElementById("chaiMasala");

chaiMasala.addEventListener("click", function() {
    document.getElementById("product-info").innerHTML =
        "<h3>Chai Masala</h3><p>A warming blend of aromatic spices made to give your chai a rich and delicious flavor.</p>";
}); 

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});