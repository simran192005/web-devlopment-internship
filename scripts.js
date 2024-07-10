document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const loadMoreButton = document.getElementById('load-more');

    let visibleItems = 6; // Initial number of items to show
    let increment = 6; // Number of items to add on 'load more'

    function showItems(count) {
        galleryItems.forEach((item, index) => {
            if (index < count) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    showItems(visibleItems);

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });

            visibleItems = increment; // Reset visible items to initial increment
            showItems(visibleItems);
        });
    });

    loadMoreButton.addEventListener('click', function() {
        visibleItems += increment;
        showItems(visibleItems);
    });

    // Lightbox
    const links = document.querySelectorAll('.gallery-item a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `<img src="${this.href}" alt="">`;
            document.body.appendChild(lightbox);
            lightbox.addEventListener('click', () => lightbox.remove());
        });
    });
});
