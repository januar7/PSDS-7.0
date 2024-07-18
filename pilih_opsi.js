document.addEventListener('DOMContentLoaded', () => {
    let regresiCount = 0;
    let classifyCount = 0;
    const maxRegresiSelections = 2;
    const maxClassifySelections = 3;
    const selectElement = document.getElementById('choose');

    selectElement.addEventListener('change', (event) => {
        if (event.target.value === 'regresi') {
            regresiCount++;
            if (regresiCount >= maxRegresiSelections) {
                const regresiOption = selectElement.querySelector('option[value="regresi"]');
                regresiOption.disabled = true;
            }
        } else if (event.target.value === 'classify') {
            classifyCount++;
            if (classifyCount >= maxClassifySelections) {
                const classifyOption = selectElement.querySelector('option[value="classify"]');
                classifyOption.disabled = true;
            }
        }
    });
});