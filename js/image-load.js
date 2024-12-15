// Fetch the text file containing the list of image filenames
fetch('images-list.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load images list');
        }
        return response.text();
    })
    .then(data => {
        // Split the file content into an array of filenames
        const imageFiles = data.split('\n').filter(file => file.trim() !== '');

        // Reference to the <ul> element
        const galleryList = document.getElementById('fh5co-gallery-list');
        const loadingText = document.getElementById('image-loading-text');

        // Clear any existing content in the <ul> element
        galleryList.innerHTML = '';

        if (imageFiles.length > 0 ) {
            loadingText.remove();
        }

        // Iterate over the image filenames and create list items
        imageFiles.forEach(file => {
            const trimmedFile = file.trim();

            // Create the <li> element
            const listItem = document.createElement('li');
            listItem.className = 'one-third animate-box';
            listItem.dataset.animateEffect = 'fadeIn';
            listItem.style.backgroundImage = `url(images/gallery/${trimmedFile})`;

            // Create the <a> element
            const anchor = document.createElement('a');
            anchor.href = `images/gallery/${trimmedFile}`;

            // Create the <div> element for the case-studies-summary
            const summaryDiv = document.createElement('div');
            summaryDiv.className = 'case-studies-summary';

            // Append the elements together
            anchor.appendChild(summaryDiv);
            listItem.appendChild(anchor);
            galleryList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error loading images:', error);
    });
