const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const FLUJO = document.getElementById('flun');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber;
    
    function calcFlujo(DATO) {
        var volumen_diario;
        var mantenimiento;
        var medio_mantenimiento;

        if(DATO > 0 && DATO <=10){
            volumen_diario = DATO * 100
            mantenimiento = volumen_diario / 24
            resultado_flujo_horario = Math.round(mantenimiento)
            medio_mantenimiento = resultado_flujo_horario * 1.5
            resultado_medio_man = Math.round(medio_mantenimiento)

            FLU.innerHTML = `Volumen Diario: ${volumen_diario} cc<br>Mantenimiento: ${resultado_flujo_horario} cc/hr<br>m+m/2: ${resultado_medio_man} cc/hr`;
            FLU.style.display = 'block';
            MAN.style.display = 'none';
            
        }else if(DATO > 10 && DATO <= 20){
            const peso_1 = 10
            const peso_2 = DATO - peso_1
            const calculo_1 = peso_1 * 100
            const calculo_2 = peso_2 * 50
            volumen_diario = calculo_1 + calculo_2
            flujo_horario = volumen_diario / 24
            resultado_flujo_horario = Math.round(flujo_horario)
            medio_mantenimiento = resultado_flujo_horario * 1.5
            resultado_medio_man = Math.round(medio_mantenimiento)

            FLU.innerHTML = `Volumen Diario: ${volumen_diario} cc<br>Mantenimiento: ${resultado_flujo_horario} cc/hr<br>m+m/2: ${resultado_medio_man} cc/hr`;
            FLU.style.display = 'block';
            MAN.style.display = 'none';

        }else if(DATO >= 20 && DATO <= 30) {
            const peso_1 = 10;
            const peso_2 = 20;
            const calculo_1 = peso_1 * 100;
            const calculo_2 = (peso_2 - peso_1) * 50;
            const calculo_3 = (DATO - peso_2) * 20;
            volumen_diario = calculo_1 + calculo_2 + calculo_3;

            flujo_horario = volumen_diario / 24
            resultado_flujo_horario = Math.round(flujo_horario)
            medio_mantenimiento = resultado_flujo_horario * 1.5
            resultado_medio_man = Math.round(medio_mantenimiento)

            FLU.innerHTML = `Volumen Diario: ${volumen_diario} cc<br>Mantenimiento: ${resultado_flujo_horario} cc/hr<br>m+m/2: ${resultado_medio_man} cc/hr`;
            FLU.style.display = 'block';
            MAN.style.display = 'none';
            
        } else if (DATO > 30) {
            const superficie_corporal = ((DATO * 4) + 7) / (DATO + 90);
            const volumen_diario_1500 = Math.round(superficie_corporal * 1500);
            const volumen_diario_2000 = Math.round(superficie_corporal * 2000);

            FLU.innerHTML = `Volumen Diario (1500): ${volumen_diario_1500} cc<br>Volumen Diario (2000): ${volumen_diario_2000} cc`;
            FLU.style.display = 'block';
            MAN.style.display = 'none';
        }
    }

    if (DATO > 0) {
        ERROR.style.display = 'none';
        calcFlujo(DATO);
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
