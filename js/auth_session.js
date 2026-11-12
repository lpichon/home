<script>
    // Fonction utilitaire pour lire un cookie par son nom
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Vérification de la présence du cookie de connexion
    if (getCookie("auth_session") !== "true") {
        // Redirection vers la page d'authentification racine
        window.location.href = "/";
    }
</script>