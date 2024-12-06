document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.organes button');
    const info = {
        cerveau: "Le cerveau, avec ses milliards de connexions neuronales, est aussi mystérieux et complexe que les profondeurs océaniques, où se cachent encore d\’innombrables secrets sur la vie.",
        coeur: "Le cœur pompe le sang dans tout le corps, comme les courants marins redistribuent les nutriments et la chaleur à travers les océans. Tous deux assurent la circulation de l\’énergie vitale, maintenant ainsi l'équilibre et la vie.",
        poumon: "Les poumons et le plancton sont essentiels à la vie sur Terre. Le phytoplancton produit environ 50% de l'oxygène que nous respirons, tout comme nos poumons permettent de diffuser l\’oxygène dans notre corps. Ils partagent un rôle vital dans le cycle de l\'oxygène. ",
        reins: "Les reins filtrent les déchets du sang, tout comme les marées régulent le mouvement des eaux côtières, nettoyant les zones littorales et permettant le renouvellement des écosystèmes marins."
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const organ = button.getAttribute('data-info');
            const message = info[organ] || "Information non disponible.";
            alert(`Organ: ${organ.toUpperCase()}\n\n${message}`);
        });
    });
});
