function showInputFields() {
    const shape = document.getElementById('shape').value;
    const inputFields = document.getElementById('input-fields');
    inputFields.innerHTML = '';

    if (!shape) return;

    let html = '';
    
    switch(shape) {
        case 'cube':
            html = `
                <div class="input-group">
                    <label for="side">Panjang Sisi (cm):</label>
                    <input type="number" id="side" step="any" min="0" placeholder="Masukkan panjang sisi">
                </div>
            `;
            break;
        case 'block':
            html = `
                <div class="input-group">
                    <label for="length">Panjang (cm):</label>
                    <input type="number" id="length" step="any" min="0" placeholder="Masukkan panjang">
                </div>
                <div class="input-group">
                    <label for="width">Lebar (cm):</label>
                    <input type="number" id="width" step="any" min="0" placeholder="Masukkan lebar">
                </div>
                <div class="input-group">
                    <label for="height">Tinggi (cm):</label>
                    <input type="number" id="height" step="any" min="0" placeholder="Masukkan tinggi">
                </div>
            `;
            break;
        case 'cylinder':
            html = `
                <div class="input-group">
                    <label for="radius">Jari-jari (cm):</label>
                    <input type="number" id="radius" step="any" min="0" placeholder="Masukkan jari-jari">
                </div>
                <div class="input-group">
                    <label for="cylinder-height">Tinggi (cm):</label>
                    <input type="number" id="cylinder-height" step="any" min="0" placeholder="Masukkan tinggi">
                </div>
            `;
            break;
        case 'sphere':
            html = `
                <div class="input-group">
                    <label for="sphere-radius">Jari-jari (cm):</label>
                    <input type="number" id="sphere-radius" step="any" min="0" placeholder="Masukkan jari-jari">
                </div>
            `;
            break;
        case 'cone':
            html = `
                <div class="input-group">
                    <label for="cone-radius">Jari-jari (cm):</label>
                    <input type="number" id="cone-radius" step="any" min="0" placeholder="Masukkan jari-jari">
                </div>
                <div class="input-group">
                    <label for="cone-height">Tinggi (cm):</label>
                    <input type="number" id="cone-height" step="any" min="0" placeholder="Masukkan tinggi">
                </div>
            `;
            break;
    }

    inputFields.innerHTML = html;
}

function calculate() {
    const shape = document.getElementById('shape').value;
    const resultsDiv = document.getElementById('results');
    
    if (!shape) {
        resultsDiv.innerHTML = '<p>Silakan pilih bangun ruang terlebih dahulu</p>';
        return;
    }

    let volume, surfaceArea;
    
    try {
        switch(shape) {
            case 'cube':
                const side = parseFloat(document.getElementById('side').value);
                if (isNaN(side) || side <= 0) throw new Error('Masukkan nilai sisi yang valid');
                volume = Math.pow(side, 3);
                surfaceArea = 6 * Math.pow(side, 2);
                break;
            case 'block':
                const length = parseFloat(document.getElementById('length').value);
                const width = parseFloat(document.getElementById('width').value);
                const height = parseFloat(document.getElementById('height').value);
                if (isNaN(length) || isNaN(width) || isNaN(height) || length <= 0 || width <= 0 || height <= 0) {
                    throw new Error('Masukkan nilai panjang, lebar, dan tinggi yang valid');
                }
                volume = length * width * height;
                surfaceArea = 2 * (length*width + length*height + width*height);
                break;
            case 'cylinder':
                const radius = parseFloat(document.getElementById('radius').value);
                const cylinderHeight = parseFloat(document.getElementById('cylinder-height').value);
                if (isNaN(radius) || isNaN(cylinderHeight) || radius <= 0 || cylinderHeight <= 0) {
                    throw new Error('Masukkan nilai jari-jari dan tinggi yang valid');
                }
                volume = Math.PI * Math.pow(radius, 2) * cylinderHeight;
                surfaceArea = 2 * Math.PI * radius * (radius + cylinderHeight);
                break;
            case 'sphere':
                const sphereRadius = parseFloat(document.getElementById('sphere-radius').value);
                if (isNaN(sphereRadius) || sphereRadius <= 0) throw new Error('Masukkan nilai jari-jari yang valid');
                volume = (4/3) * Math.PI * Math.pow(sphereRadius, 3);
                surfaceArea = 4 * Math.PI * Math.pow(sphereRadius, 2);
                break;
            case 'cone':
                const coneRadius = parseFloat(document.getElementById('cone-radius').value);
                const coneHeight = parseFloat(document.getElementById('cone-height').value);
                if (isNaN(coneRadius) || isNaN(coneHeight) || coneRadius <= 0 || coneHeight <= 0) {
                    throw new Error('Masukkan nilai jari-jari dan tinggi yang valid');
                }
                const slantHeight = Math.sqrt(Math.pow(coneRadius, 2) + Math.pow(coneHeight, 2));
                volume = (1/3) * Math.PI * Math.pow(coneRadius, 2) * coneHeight;
                surfaceArea = Math.PI * coneRadius * (coneRadius + slantHeight);
                break;
        }

        resultsDiv.innerHTML = `
            <div class="result-item">
                <strong>Volume:</strong> ${volume.toFixed(2)} cm³
            </div>
            <div class="result-item">
                <strong>Luas Permukaan:</strong> ${surfaceArea.toFixed(2)} cm²
            </div>
        `;
    } catch (error) {
        resultsDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function resetForm() {
    document.getElementById('shape').value = '';
    document.getElementById('input-fields').innerHTML = '';
    document.getElementById('results').innerHTML = '';
}