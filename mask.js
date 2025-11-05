// js/masks.js

function maskInput(e, type) {
    const v = e.target.value.replace(/\D/g, '');
    let out = v;
    if (type === 'cpf') {
        out = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (type === 'tel') {
        if (v.length <= 10) out = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        else out = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (type === 'cep') {
        out = v.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    e.target.value = out;
}

export function initMasks() {
    document.addEventListener('input', e => {
        const el = e.target.closest('[data-mask]');
        if (!el) return;
        maskInput(e, el.dataset.mask);
    });
}
