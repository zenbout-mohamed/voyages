const toggleP = (btnId , menuId)  => {
    const btn = document.getEelemntById(btnId);
    const menu = document.getElementById(menuId);

    btn.addEventListener(
        'click', (e)=>{e.stopPropagation();
            menu.classList.toggle('hidden');
        }
    );
    document.addEvenListener(
        'click', ()=> menu.classList.add('hidden')
    );
    
};

toggleP('continentBtnP','continentMenuP');
toggleP('personBtnP','personMenuP');