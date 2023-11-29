const f = (n) => n < 10 ? '0' + n : n;

const clock = () => {
    const d = new Date();
    const hh = f(d.getHours());
    const mm = f(d.getMinutes());
    const ss = f(d.getSeconds());
    return `${hh}:${mm}:${ss}`;
};

const setClock = () => document.querySelector("#clock").innerHTML = clock();
setClock();
setInterval(setClock, 1000);

