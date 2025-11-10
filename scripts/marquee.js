document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.getElementById('marquee');
    const content = "LA ANTORCHA FLAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    const repeatCount = 20;
    
    let marqueeContent = '';
    for (let i = 0; i < repeatCount; i++) {
        marqueeContent += `<span class="marquee-text">${content}</span>`;
    }
    
    marquee.innerHTML = marqueeContent + marqueeContent;
    
    window.setMarqueeSpeed = function(speed) {
        // Speed is duration in seconds (lower = faster)
        marquee.style.animationDuration = speed + 's';
    };
    
    setMarqueeSpeed(60); // Slower
});