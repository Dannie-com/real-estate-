//product//
const tourButtons = document.querySelectorAll('.btn-outline, .amenities-btn');
    
const payButton = document.querySelector('.btn-primary');
    
tourButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You have requested a tour successfully');
        });
    
    });
   
    const interactiveElements = document.querySelectorAll('.btn, .nav-links a');
    interactiveElements.forEach(element => {
        element.style.cursor = 'pointer';
    });
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navigation link clicked:', this.textContent);
        });
    });
    
    function loadImages() {
        const heroImage = document.querySelector('.hero-image');
        const neighborhoodImage = document.querySelector('.neighborhood-image');
        
        if (heroImage) {
            heroImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')";
            heroImage.style.backgroundSize = 'cover';
            heroImage.style.backgroundPosition = 'center';
            heroImage.style.backgroundRepeat = 'no-repeat';
        }

        if (neighborhoodImage) {
            neighborhoodImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')";
            neighborhoodImage.style.backgroundSize = 'cover';
            neighborhoodImage.style.backgroundPosition = 'center';
            neighborhoodImage.style.backgroundRepeat = 'no-repeat';
        }
    }

    document.addEventListener("DOMContentLoaded", loadImages);
    
    function initializeMap() {
        const mapContainer = document.querySelector('.map-container');
        
        if (mapContainer && typeof google !== 'undefined') {
            const map = new google.maps.Map(mapContainer, {
                center: { lat: 4.8156, lng: 7.0498 },
                    zoom: 15,
                    mapTypeId: 'roadmap'
                });
                
                const marker = new google.maps.Marker({
                    position: { lat: 4.8156, lng: 7.0498 },
                    map: map,
                    title: 'Property Location'
                });
            }
        }
        
        loadImages();
        
        if (typeof google !== 'undefined') {
            initializeMap();
        }
        
    console.log('Real estate listing page loaded successfully!');


//popup//
let popupShown = false;

window.addEventListener('scroll', function() {
    if (!popupShown) {
        popupShown = true;
        
        setTimeout(function() {
            document.getElementById('emailPopup').style.display = 'flex';
        }, 5000); 
    }
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('emailPopup').style.display = 'none';
});
