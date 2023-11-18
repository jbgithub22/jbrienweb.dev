<script>
    document.addEventListener('DOMContentLoaded', function () {
        var menuToggle = document.querySelector('.menu-toggle');
        var navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function () {
            navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
        });
    });
</script>
