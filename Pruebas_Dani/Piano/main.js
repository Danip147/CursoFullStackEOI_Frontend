var context = new AudioContext();

function jsNote(frecuencia){
    var o = context.createOscillator();
    g = context.createGain();
    o.connect(g);
    o.type="square";
    o.frequency.value=frecuencia;
    g.connect(context.destination);
    o.start(10);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime +1.5);

}