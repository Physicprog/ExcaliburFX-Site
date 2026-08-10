function setLang(l) {
    localStorage.setItem('siteLang', l);

    document.getElementById('fr').style.display = (l === 'fr') ? 'block' : 'none';
    document.getElementById('en').style.display = (l === 'en') ? 'block' : 'none';
    document.getElementById('lang-fr').className = (l === 'fr') ? 'active' : '';
    document.getElementById('lang-en').className = (l === 'en') ? 'active' : '';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('siteLang') || 'en';
    setLang(savedLang);
});