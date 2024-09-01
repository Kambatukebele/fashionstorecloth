window.onload = (event) => {
    // Capture the announcement bar texts
    const ANNOUNCEMENT_BAR = document.querySelectorAll('.announcement');
    
    let currentIndex = 0;
    if (ANNOUNCEMENT_BAR.length !== 1) {    
        const SLIDE_ANNOUNCEMENTS = () => {
            const CURRENT = ANNOUNCEMENT_BAR[currentIndex];
            const NEXT_INDEX = (currentIndex + 1) % ANNOUNCEMENT_BAR.length;
            const NEXT = ANNOUNCEMENT_BAR[NEXT_INDEX];
            // Slide current out to the left
            CURRENT.classList.add('animate-slide-out');
            
            // Slide next in from the right
            NEXT.classList.add('animate-slide-in');
            NEXT.style.display = 'inline-block'; // Make the NEXT visible

            // After the animation, hide the CURRENT and reset its position
            setTimeout(() => {
                CURRENT.style.display = 'none';
                CURRENT.classList.remove('animate-slide-out');
                NEXT.classList.remove('animate-slide-in');
                currentIndex = NEXT_INDEX; // Update the current index
            }, 1000); // 1 second animation time
        };
        // Start the loop to slide every 5 seconds
        setInterval(SLIDE_ANNOUNCEMENTS, 3000);
    }
   
    
}