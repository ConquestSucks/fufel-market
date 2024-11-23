const nodeListOfElementToHtml = (list: NodeListOf<Element>) : Array<HTMLElement> => {
    return Array.from(list, (el) => el as HTMLElement)
}

export const animateText3D = () => {
    document.addEventListener('mousemove', (event) => {
        const magneticTexts = nodeListOfElementToHtml(document.querySelectorAll('.magnetic'));
        const staticTexts = nodeListOfElementToHtml(document.querySelectorAll('.static'));
        const mouseX = event.clientX;
        const mouseY = event.clientY;

      
        magneticTexts.forEach((text, index) => {
            const staticText = staticTexts[index];
           
            const rect = text.getBoundingClientRect();

            const textX = rect.left + rect.width / 2;
            const textY = rect.top + rect.height / 2;
        
            const diffX = mouseX - textX;
            const diffY = mouseY - textY;
        
            const dist = Math.sqrt(diffX * diffX + diffY * diffY);
            const maxDist = 100;
        
            if (dist < maxDist) {
                const strength = (maxDist - dist) / maxDist;
                const offsetX = (diffX * strength) / 10;
                const offsetY = (diffY * strength) / 10;
        
                text.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                text.style.opacity = '1';

                staticText.classList.add('active');
            } else {
                text.style.transform = `translate(0px, 0px)`;
                text.style.opacity = '0';
        
                staticText.classList.remove('active');
            }
        });
      });
}