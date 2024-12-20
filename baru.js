document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product-item");
    const wishlist = document.getElementById("wishlist");
    const wishlistButton = document.getElementById("wishlist-page-button");

    // Array untuk menyimpan data wishlist
    let wishlistData = [];

    products.forEach(product => {
        const button = document.createElement("button");
        button.textContent = "Add to Wishlist";
        button.classList.add("wishlist-button");
        product.appendChild(button);

        button.addEventListener("click", () => {
            const productName = product.querySelector("h3").textContent;

            // Cek apakah produk sudah ada di wishlist
            if (wishlistData.includes(productName)) {
                alert(`${productName} is already in your wishlist!`);
                return;
            }

            // Tambahkan produk ke wishlist
            wishlistData.push(productName);

            const wishlistItem = document.createElement("li");
            wishlistItem.innerHTML = `
                ${productName}
                <button class="wishlist-remove">Remove</button>
            `;
            wishlist.appendChild(wishlistItem);

            // Event listener untuk tombol "Remove"
            wishlistItem.querySelector(".wishlist-remove").addEventListener("click", () => {
                wishlistData = wishlistData.filter(item => item !== productName);
                wishlistItem.remove();
            });
        });
    });

    // Event untuk navigasi ke halaman wishlist
    wishlistButton.addEventListener("click", () => {
        // Simpan data wishlist ke localStorage
        localStorage.setItem("wishlist", JSON.stringify(wishlistData));
        // Navigasi ke halaman wishlist
        window.location.href = "wishlist.html";
    });
});
