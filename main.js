
        
// js/main.js

import { initCarousel } from './carousel.js';
import { initMasks } from './masks.js';
import { initVolValidation } from './validation.js';

// Função para inicializar os gráficos
function initCharts(){ 
    if(typeof Chart === 'undefined') return;
    const pie = document.getElementById('chart-resources');
    if(pie){
        new Chart(pie, {
            type: 'pie',
            data: {
                labels:['Acolhimento','Tratamento','Reinserção','Prevenção'],
                datasets:[{data:[30,45,15,10]}]
            },
            options:{responsive:true,plugins:{legend:{position:'bottom'}}}
        });
    }
    const line = document.getElementById('chart-volunteers');
    if(line){
        new Chart(line, {
            type:'line',
            data:{
                labels:['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
                datasets:[{label:'Atendimentos',data:[5,8,12,18,25,30,35,40,45,50,55,60],fill:false}]
            },
            options:{responsive:true,plugins:{legend:{display:false}}}
        });
    }
    const bars = document.getElementById('chart-impact');
    if(bars){
        new Chart(bars, {
            type:'bar',
            data:{
                labels:['Norte','Nordeste','Centro-Oeste','Sudeste','Sul'],
                datasets:[{label:'Beneficiários',data:[120,200,80,250,160]}]
            },
            options:{responsive:true,plugins:{legend:{display:false}}}
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // 1. Scripts Globais: Rodam em todas as páginas
    initMasks();
    initCharts(); 

    // 2. Roteamento de Módulos (MPA - Multi Page Application)
    
    
    if (document.querySelector('.carousel-slide')) {
        initCarousel();
    } 

  
    if (document.getElementById('vol-form')) {
        initVolValidation();
    }
    
   
    console.log("Aplicação Sã e Salvo inicializada com módulos.");
});

