document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("[data-search-input]");
    const rows = Array.from(document.querySelectorAll("[data-searchable]"));
    const resultCounter = document.querySelector("[data-result-counter]");

    const updateVisibleRows = () => {
        if (!searchInput || rows.length === 0) {
            return;
        }

        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        rows.forEach((row) => {
            const content = (row.dataset.searchable || "").toLowerCase();
            const isVisible = content.includes(query);
            row.classList.toggle("hidden", !isVisible);

            if (isVisible) {
                visibleCount += 1;
            }
        });

        if (resultCounter) {
            resultCounter.textContent = `${visibleCount} produit${visibleCount > 1 ? "s" : ""}`;
        }
    };

    if (searchInput && rows.length > 0) {
        searchInput.addEventListener("input", updateVisibleRows);
        updateVisibleRows();
    }

    const productForm = document.querySelector("[data-validate-product-form]");

    if (productForm) {
        productForm.addEventListener("submit", (event) => {
            const nameInput = productForm.querySelector('input[name="name"]');
            const priceInput = productForm.querySelector('input[name="price"]');
            const stockInput = productForm.querySelector('input[name="stock"]');
            const errors = [];

            if (nameInput && !nameInput.value.trim()) {
                errors.push("Le nom du produit est obligatoire.");
            }

            if (priceInput && priceInput.value !== "" && Number(priceInput.value) < 0) {
                errors.push("Le prix doit être supérieur ou égal à 0.");
            }

            if (stockInput && stockInput.value !== "" && Number(stockInput.value) < 0) {
                errors.push("Le stock doit être supérieur ou égal à 0.");
            }

            let errorBox = document.querySelector("[data-form-error-box]");

            if (errors.length > 0) {
                event.preventDefault();

                if (!errorBox) {
                    errorBox = document.createElement("div");
                    errorBox.setAttribute("data-form-error-box", "true");
                    errorBox.className = "rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700";
                    productForm.prepend(errorBox);
                }

                errorBox.innerHTML = "";
                errors.forEach((message) => {
                    const paragraph = document.createElement("p");
                    paragraph.textContent = message;
                    errorBox.appendChild(paragraph);
                });

                errorBox.scrollIntoView({ behavior: "smooth", block: "center" });
                return;
            }

            if (errorBox) {
                errorBox.remove();
            }
        });
    }
});
