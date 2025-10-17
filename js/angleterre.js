const toggleA = (btnId , menuId) => {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);

    btn.addEventListener(
        'click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
        }
    );

    document.addEventListener(
        'click', () => menu.classList.add('hidden')
    );

};

toggleA('continentBtnA','continentMenuA');
toggleA('personBtnA','personMenuA');