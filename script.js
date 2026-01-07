let currentPage = 1;

function goToPage(pageNum) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + pageNum).classList.add('active');
    currentPage = pageNum;
    window.scrollTo(0, 0);

    if (pageNum === 2) {
        startTimer(1);
    } else if (pageNum === 3) {
        startTimer(2);
    }
}

function startTimer(timerNum) {
    let seconds = 5;
    const timerEl = document.getElementById('timer' + timerNum);
    const progressEl = document.getElementById('progress' + timerNum);
    const btnEl = document.getElementById('btn' + timerNum);
    const btnTimerEl = document.getElementById('btnTimer' + timerNum);

    progressEl.style.width = '0%';

    const interval = setInterval(() => {
        seconds--;
        timerEl.textContent = seconds;
        btnTimerEl.textContent = seconds;
        progressEl.style.width = ((5 - seconds) / 5 * 100) + '%';

        if (seconds <= 0) {
            clearInterval(interval);
            btnEl.style.opacity = '1';
            btnEl.style.pointerEvents = 'auto';
            btnEl.innerHTML = 'CONTINUAR';
        }
    }, 1000);
}