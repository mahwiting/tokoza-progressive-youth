
<script>
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('en-US', { month: 'short' }).toUpperCase();

    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        const cardDay = card.querySelector('.event-date .day').innerText.trim();
        const cardMonth = card.querySelector('.event-date .month').innerText.trim();

        if (parseInt(cardDay) === day && cardMonth === month) {
            card.classList.add('highlight-event');
            card.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
</script>
