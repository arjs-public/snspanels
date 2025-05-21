(function() {
    // Global items array to store data
    var items = [];

    // Cache DOM elements
    const listbox = document.getElementById("listbox");
    const nameInput = document.getElementById("name");
    const topInput = document.getElementById("top");
    const bottomInput = document.getElementById("bottom");

    // --- LocalStorage Helper Functions ---

    /**
     * Retrieves an item from localStorage.
     * @param {string} key - The key of the item to retrieve.
     * @returns {string|null} The value of the item, or null if not found.
     */
    function getLocalStorageData(key) {
        return localStorage.getItem(key);
    }

    /**
     * Stores an item in localStorage.
     * @param {string} key - The key to store the item under.
     * @param {string} value - The value of the item to store.
     */
    function setLocalStorageData(key, value) {
        localStorage.setItem(key, value);
    }

    /**
     * Removes an item from localStorage.
     * @param {string} key - The key of the item to remove.
     */
    function removeFromLocalStorage(key) {
        localStorage.removeItem(key);
    }

    // --- UI Interaction Functions ---

    /**
     * Populates the input fields with the data of the selected item from the listbox.
     */
    function fillTextBoxes() {
        if (listbox.selectedIndex === -1) { // Check if an item is selected
            // Optionally, clear text boxes or provide feedback
            nameInput.value = "";
            topInput.value = "";
            bottomInput.value = "";
            return;
        }
        const selectedItem = items[listbox.selectedIndex];
        if (selectedItem) {
            nameInput.value = selectedItem.name;
            topInput.value = selectedItem.top;
            bottomInput.value = selectedItem.bottom;
        }
    }

    /**
     * Adds a new item to the list and localStorage.
     * Reads data from the input fields.
     */
    function addItem() {
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Item name cannot be empty.");
            return;
        }
        const top = topInput.value.trim();
        const bottom = bottomInput.value.trim();
        const item = { name: name, top: top, bottom: bottom };

        // Check if item with the same name already exists
        if (items.some(existingItem => existingItem.name === name)) {
            alert("An item with this name already exists. Please use a different name or edit the existing item.");
            return;
        }

        items.push(item);
        try {
            setLocalStorageData(name, JSON.stringify(item));
        } catch (error) {
            console.error("Error saving item to localStorage:", error);
            alert("Error saving item. Please check console for details.");
            // Optionally, remove the item from the 'items' array if saving fails
            items.pop();
            return;
        }
        updateListbox();
        clearInputFields();
    }

    /**
     * Deletes the selected item from the list and localStorage.
     */
    function deleteItem() {
        if (listbox.selectedIndex === -1) {
            alert("Please select an item to delete.");
            return;
        }
        const selectedOption = listbox.options[listbox.selectedIndex];
        if (selectedOption) {
            const itemName = selectedOption.text;
            items.splice(listbox.selectedIndex, 1);
            removeFromLocalStorage(itemName);
            updateListbox();
            clearInputFields();
        } else {
            alert("Could not find the selected item to delete.");
        }
    }

    /**
     * Edits the selected item with the new data from input fields and updates localStorage.
     */
    function editItem() {
        if (listbox.selectedIndex === -1) {
            alert("Please select an item to edit.");
            return;
        }
        const originalItemName = listbox.options[listbox.selectedIndex].text;
        const name = nameInput.value.trim();
        if (name === "") {
            alert("Item name cannot be empty.");
            return;
        }
        const top = topInput.value.trim();
        const bottom = bottomInput.value.trim();
        const updatedItem = { name: name, top: top, bottom: bottom };

        // If the name was changed, remove the old item from localStorage
        if (originalItemName !== name) {
            removeFromLocalStorage(originalItemName);
        }

        items[listbox.selectedIndex] = updatedItem;
        try {
            setLocalStorageData(name, JSON.stringify(updatedItem));
        } catch (error) {
            console.error("Error saving edited item to localStorage:", error);
            alert("Error saving edited item. Please check console for details.");
            // Revert changes if saving fails (optional, depends on desired behavior)
            // For simplicity, we'll leave the in-memory 'items' array as is
            return;
        }
        updateListbox();
        // Keep edited values in fields for review or further edits
    }

    // --- Overlay Display Functions ---

    /**
     * Opens a new browser window/tab to display the overlay with selected item's data.
     */
    function showNewFunction() {
        if (listbox.selectedIndex === -1) {
            alert("Please select an item to show.");
            return;
        }
        const selectedItem = items[listbox.selectedIndex];
        if (selectedItem) {
            const url = `https://arjs-public.github.io/snspanels/box/overlay.html?top=${encodeURIComponent(selectedItem.top)}&bottom=${encodeURIComponent(selectedItem.bottom)}`;
            window.open(url, "_blank");
            // clearInputFields(); // User might want to keep the selection
        } else {
            alert("Selected item not found.");
        }
    }

    /**
     * Opens/updates a named browser window ("ShowWindow") to display the overlay.
     */
    function showSameFunction() {
        if (listbox.selectedIndex === -1) {
            alert("Please select an item to show.");
            return;
        }
        const selectedItem = items[listbox.selectedIndex];
        if (selectedItem) {
            const url = `https://arjs-public.github.io/snspanels/box/overlay.html?top=${encodeURIComponent(selectedItem.top)}&bottom=${encodeURIComponent(selectedItem.bottom)}`;
            window.open(url, "ShowWindow"); // Uses a named window
            // clearInputFields();
        } else {
             alert("Selected item not found.");
        }
    }

    /**
     * Opens/updates the named "ShowWindow" to a blank overlay, effectively hiding the content.
     */
    function hideFunction() {
        // No selection needed to hide, it just loads the base overlay URL
        const url = "https://arjs-public.github.io/snspanels/box/overlay.html";
        window.open(url, "ShowWindow");
        // clearInputFields(); // No item context to clear from necessarily
    }

    // --- Utility Functions ---

    /**
     * Clears the input fields.
     */
    function clearInputFields() {
        nameInput.value = "";
        topInput.value = "";
        bottomInput.value = "";
    }

    /**
     * Updates the listbox with current items.
     * It clears and repopulates the listbox.
     */
    function updateListbox() {
        listbox.innerHTML = ""; // Clear existing options
        items.forEach(item => {
            const option = document.createElement("option");
            option.text = item.name;
            option.value = item.name; // Can be useful
            listbox.add(option);
        });
        // After updating, if no item is selected, clear text boxes
        if (listbox.selectedIndex === -1) {
            clearInputFields();
        }
    }

    /**
     * Loads items from localStorage on script initialization.
     * Includes basic error handling for JSON parsing.
     */
    function loadItemsFromLocalStorage() {
        const tempItems = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            // Optional: Add a check to only load items relevant to this app, e.g., by a prefix
            // if (!key.startsWith('boxItem_')) continue;
            try {
                const itemString = getLocalStorageData(key);
                if (itemString) {
                    const item = JSON.parse(itemString);
                    // Basic validation for the item structure
                    if (item && typeof item.name === 'string') {
                        tempItems.push(item);
                    } else {
                        console.warn(`Item with key "${key}" from localStorage is not a valid item object. Skipping.`);
                    }
                }
            } catch (error) {
                console.error(`Error parsing item with key "${key}" from localStorage:`, error);
                // Optionally, remove the malformed item: removeFromLocalStorage(key);
            }
        }
        items = tempItems; // Assign loaded items to the global array
        updateListbox();
    }

    // --- Initialization ---

    // Expose functions to be called from HTML onclick attributes
    window.fillTextBoxes = fillTextBoxes;
    window.addItem = addItem;
    window.deleteItem = deleteItem;
    window.editItem = editItem;
    window.showNewFunction = showNewFunction;
    window.showSameFunction = showSameFunction;
    window.hideFunction = hideFunction;

    // Add event listener for listbox click to fill text boxes
    // This replaces the onclick="fillTextBoxes()" in the HTML for the select element
    // if (listbox) {
    //    listbox.addEventListener('click', fillTextBoxes);
    // }
    // Keeping the onclick in HTML for now as per instructions for simplicity.
    // If listbox is cached, we can add event listener directly.

    // Load items when the script is executed
    loadItemsFromLocalStorage();

})(); // End of IIFE
