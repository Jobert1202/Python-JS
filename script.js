let promena1 = 5
let promena2 = 3

function obs_kruh(r){
    if(r > 0){
        return 3.14 * (r**2);
    }
    else{
        return "Zadal jsi nulovou nebo zápornou hodnotu"
    }
}

/**
 * Zadejte polomer kruhu r:
 * @param {number} r - Poloměr kruhu
 * @returns {number|string} - Obvod kruhu nebo chybová z
 */

function obv_kruh(r){
    if ( r !== 'number') {
        return "Zadal jsi neplatný typ hodnoty";
    }
    if (r > 0){
        return 2 * 3.14 * r
    } else {
        return "Zadal jsi nulovou nebo zápornou hodnotu"
    }
}

function obs_obd(a, b){
    if ((a > 0) && (b > 0)){
        return a**2 + b**2;
    }
    else {
        return "Zadal jsi nulovou nebo zápornou hodnotu"
    }
}

