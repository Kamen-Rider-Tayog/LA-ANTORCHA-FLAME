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
        marquee.style.animationDuration = speed + 's';
    };
    
    setMarqueeSpeed(60);
});

document.addEventListener('DOMContentLoaded', function() {
    const marquee2nd = document.getElementById('marquee-2nd');
    const content = "LA ANTORCHA FLAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    const repeatCount = 20;
    
    let marqueeContent = '';
    for (let i = 0; i < repeatCount; i++) {
        marqueeContent += `<span class="marquee-text-2nd">${content}</span>`;
    }
    
    marquee2nd.innerHTML = marqueeContent + marqueeContent;
    
    window.setMarqueeSpeed = function(speed) {
        marquee2nd.style.animationDuration = speed + 's';
    };
    
    setMarqueeSpeed(60); 
});