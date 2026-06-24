// Global navigation logic across all 12 modules
function switchFormula(event, formulaId) {
    document.querySelectorAll('.formula-section').forEach(div => div.classList.add('hidden'));
    document.getElementById(formulaId).classList.remove('hidden');
    document.querySelectorAll('.formula-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById('output-box').classList.add('hidden');
}

// Helper to sanitize messy JS float numbers
function cleanNum(num) {
    return parseFloat(num.toFixed(4));
}

// 1. QUADRATIC EQUATION
function solveQuadratic() {
    const a = parseFloat(document.getElementById('quad-a').value);
    const b = parseFloat(document.getElementById('quad-b').value);
    const c = parseFloat(document.getElementById('quad-c').value);
    const out = document.getElementById('steps-content');
    
    if(isNaN(a) || isNaN(b) || isNaN(c)) { alert("Fill all fields"); return; }
    if(a === 0) { alert(" 'a' cannot be 0"); return; }

    const disc = (b * b) - (4 * a * c);
    let html = `<div class="step"><strong>Step 1: Variables</strong><br>a = ${a}, b = ${b}, c = ${c}</div>`;
    html += `<div class="step"><strong>Step 2: Discriminant (D)</strong><br>D = b² - 4ac<br>D = (${b})² - 4(${a})(${c}) = <strong>${disc}</strong></div>`;

    if (disc < 0) {
        html += `<div class="step"><strong>Step 3: Analyze</strong><br>D < 0, meaning roots are imaginary.</div>`;
    } else {
        const r1 = (-b + Math.sqrt(disc)) / (2 * a);
        const r2 = (-b - Math.sqrt(disc)) / (2 * a);
        html += `<div class="step"><strong>Step 3: Formula</strong><br>x = (-b ± √D) / 2a</div>`;
        html += `<div class="step"><strong>Final Solution:</strong><br>Root 1 = <strong>${cleanNum(r1)}</strong><br>Root 2 = <strong>${cleanNum(r2)}</strong></div>`;
    }
    out.innerHTML = html;
    document.getElementById('output-box').classList.remove('hidden');
}

// 2. DISTANCE FORMULA
function solveDistance() {
    const x1 = parseFloat(document.getElementById('dist-x1').value);
    const y1 = parseFloat(document.getElementById('dist-y1').value);
    const x2 = parseFloat(document.getElementById('dist-x2').value);
    const y2 = parseFloat(document.getElementById('dist-y2').value);
    const out = document.getElementById('steps-content');

    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) { alert("Fill all fields"); return; }

    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.sqrt((dx * dx) + (dy * dy));

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>d = √((x₂ - x₁)² + (y₂ - y₁)²)</div>
        <div class="step"><strong>Step 2: Substitute Differences</strong><br>Δx = ${x2} - ${x1} = ${dx}<br>Δy = ${y2} - ${y1} = ${dy}</div>
        <div class="step"><strong>Step 3: Square and Sum</strong><br>d = √(${dx}² + ${dy}²)<br>d = √(${dx*dx} + ${dy*dy}) = √(${(dx*dx)+(dy*dy)})</div>
        <div class="step"><strong>Final Answer:</strong><br>Distance (d) = <strong>${cleanNum(dist)} units</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 3. SLOPE FORMULA
function solveSlope() {
    const x1 = parseFloat(document.getElementById('slope-x1').value);
    const y1 = parseFloat(document.getElementById('slope-y1').value);
    const x2 = parseFloat(document.getElementById('slope-x2').value);
    const y2 = parseFloat(document.getElementById('slope-y2').value);
    const out = document.getElementById('steps-content');

    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) { alert("Fill all fields"); return; }
    if(x2 - x1 === 0) { alert("Vertical lines have an undefined slope (division by zero)."); return; }

    const num = y2 - y1;
    const den = x2 - x1;
    const m = num / den;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>m = (y₂ - y₁) / (x₂ - x₁)</div>
        <div class="step"><strong>Step 2: Substituted Values</strong><br>m = (${y2} - ${y1}) / (${x2} - ${x1})</div>
        <div class="step"><strong>Step 3: Division Layout</strong><br>m = ${num} / ${den}</div>
        <div class="step"><strong>Final Answer:</strong><br>Slope (m) = <strong>${cleanNum(m)}</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 4. OHM'S LAW
function solveOhmsLaw() {
    const i = parseFloat(document.getElementById('ohms-i').value);
    const r = parseFloat(document.getElementById('ohms-r').value);
    const out = document.getElementById('steps-content');

    if(isNaN(i) || isNaN(r)) { alert("Fill all fields"); return; }
    const v = i * r;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>V = I × R</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>V = ${i} A × ${r} Ω</div>
        <div class="step"><strong>Final Answer:</strong><br>Voltage (V) = <strong>${cleanNum(v)} Volts</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 5. CAPACITANCE
function solveCapacitance() {
    const c = parseFloat(document.getElementById('cap-c').value);
    const v = parseFloat(document.getElementById('cap-v').value);
    const out = document.getElementById('steps-content');

    if(isNaN(c) || isNaN(v)) { alert("Fill all fields"); return; }
    const q = c * v;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>Q = C × V</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>Q = ${c} F × ${v} V</div>
        <div class="step"><strong>Final Answer:</strong><br>Electric Charge (Q) = <strong>${cleanNum(q)} Coulombs</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 6. KINETIC ENERGY
function solveKineticEnergy() {
    const m = parseFloat(document.getElementById('ke-m').value);
    const v = parseFloat(document.getElementById('ke-v').value);
    const out = document.getElementById('steps-content');

    if(isNaN(m) || isNaN(v)) { alert("Fill all fields"); return; }
    const ke = 0.5 * m * v * v;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>KE = 0.5 × m × v²</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>KE = 0.5 × ${m} kg × (${v} m/s)²</div>
        <div class="step"><strong>Step 3: Square Velocity</strong><br>KE = 0.5 × ${m} × ${v*v}</div>
        <div class="step"><strong>Final Answer:</strong><br>Kinetic Energy (KE) = <strong>${cleanNum(ke)} Joules</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 7. WAVE VELOCITY
function solveWaveVelocity() {
    const f = parseFloat(document.getElementById('wave-f').value);
    const l = parseFloat(document.getElementById('wave-l').value);
    const out = document.getElementById('steps-content');

    if(isNaN(f) || isNaN(l)) { alert("Fill all fields"); return; }
    const v = f * l;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>v = f × λ</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>v = ${f} Hz × ${l} m</div>
        <div class="step"><strong>Final Answer:</strong><br>Velocity (v) = <strong>${cleanNum(v)} m/s</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 8. FORCE
function solveForce() {
    const m = parseFloat(document.getElementById('force-m').value);
    const a = parseFloat(document.getElementById('force-a').value);
    const out = document.getElementById('steps-content');

    if(isNaN(m) || isNaN(a)) { alert("Fill all fields"); return; }
    const f = m * a;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>F = m × a</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>F = ${m} kg × ${a} m/s²</div>
        <div class="step"><strong>Final Answer:</strong><br>Force (F) = <strong>${cleanNum(f)} Newtons</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 9. TORQUE
function solveTorque() {
    const f = parseFloat(document.getElementById('torque-f').value);
    const r = parseFloat(document.getElementById('torque-r').value);
    const out = document.getElementById('steps-content');

    if(isNaN(f) || isNaN(r)) { alert("Fill all fields"); return; }
    const t = f * r;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula (Perpendicular)</strong><br>τ = F × r</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>τ = ${f} N × ${r} m</div>
        <div class="step"><strong>Final Answer:</strong><br>Torque (τ) = <strong>${cleanNum(t)} N·m</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 10. WORK DONE
function solveWork() {
    const f = parseFloat(document.getElementById('work-f').value);
    const d = parseFloat(document.getElementById('work-d').value);
    const out = document.getElementById('steps-content');

    if(isNaN(f) || isNaN(d)) { alert("Fill all fields"); return; }
    const w = f * d;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>W = F × d</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>W = ${f} N × ${d} m</div>
        <div class="step"><strong>Final Answer:</strong><br>Work Done (W) = <strong>${cleanNum(w)} Joules</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 11. PRESSURE
function solvePressure() {
    const f = parseFloat(document.getElementById('press-f').value);
    const a = parseFloat(document.getElementById('press-a').value);
    const out = document.getElementById('steps-content');

    if(isNaN(f) || isNaN(a)) { alert("Fill all fields"); return; }
    if(a === 0) { alert("Area cannot be zero."); return; }
    const p = f / a;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>P = F / A</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>P = ${f} N / ${a} m²</div>
        <div class="step"><strong>Final Answer:</strong><br>Pressure (P) = <strong>${cleanNum(p)} Pascals (Pa)</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}

// 12. DENSITY
function solveDensity() {
    const m = parseFloat(document.getElementById('dens-m').value);
    const v = parseFloat(document.getElementById('dens-v').value);
    const out = document.getElementById('steps-content');

    if(isNaN(m) || isNaN(v)) { alert("Fill all fields"); return; }
    if(v === 0) { alert("Volume cannot be zero."); return; }
    const d = m / v;

    out.innerHTML = `
        <div class="step"><strong>Step 1: Formula</strong><br>ρ = m / V</div>
        <div class="step"><strong>Step 2: Substitution</strong><br>ρ = ${m} kg / ${v} m³</div>
        <div class="step"><strong>Final Answer:</strong><br>Mass Density (ρ) = <strong>${cleanNum(d)} kg/m³</strong></div>
    `;
    document.getElementById('output-box').classList.remove('hidden');
}
