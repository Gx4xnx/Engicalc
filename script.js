// Function to switch between different formula screens
function switchFormula(formulaId) {
    // Hide all formulas
    document.querySelectorAll('.formula-section').forEach(div => div.classList.add('hidden'));
    // Show selected formula
    document.getElementById(formulaId).classList.remove('hidden');
    
    // Update active button styling
    document.querySelectorAll('.formula-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Hide previous output
    document.getElementById('output-box').classList.add('hidden');
}

// 1. OHM'S LAW SOLVER
function solveOhmsLaw() {
    const i = parseFloat(document.getElementById('ohms-i').value);
    const r = parseFloat(document.getElementById('ohms-r').value);
    const outputBox = document.getElementById('output-box');
    const stepsContent = document.getElementById('steps-content');

    if (isNaN(i) || isNaN(r)) {
        alert("Please enter values for both Current and Resistance.");
        return;
    }

    const v = i * r;

    // Generate step-by-step breakdown
    stepsContent.innerHTML = `
        <div class="step"><strong>Step 1: Identify Given Variables</strong><br>Current ($I$) = ${i} A<br>Resistance ($R$) = ${r} Ω</div>
        <div class="step"><strong>Step 2: State the Formula</strong><br>$V = I \times R$</div>
        <div class="step"><strong>Step 3: Substitute the Values</strong><br>$V = ${i} \times ${r}$</div>
        <div class="step"><strong>Step 4: Calculate Final Result</strong><br><strong>Voltage ($V$) = ${v} Volts</strong></div>
    `;
    outputBox.classList.remove('hidden');
}

// 2. QUADRATIC EQUATION SOLVER
function solveQuadratic() {
    const a = parseFloat(document.getElementById('quad-a').value);
    const b = parseFloat(document.getElementById('quad-b').value);
    const c = parseFloat(document.getElementById('quad-c').value);
    const outputBox = document.getElementById('output-box');
    const stepsContent = document.getElementById('steps-content');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter values for a, b, and c.");
        return;
    }
    if (a === 0) {
        alert("Value of 'a' cannot be zero in a quadratic equation.");
        return;
    }

    // Step 1: Discriminant (b^2 - 4ac)
    const discriminant = (b * b) - (4 * a * c);
    let htmlResult = `
        <div class="step"><strong>Step 1: Identify Coefficients</strong><br>a = ${a}, b = ${b}, c = ${c}</div>
        <div class="step"><strong>Step 2: Calculate the Discriminant ($D$)</strong><br>Formula: $D = b^2 - 4ac$<br>$D = (${b})^2 - 4(${a})(${c})$<br>$D = ${b*b} - ${4*a*c}$<br><strong>$D = ${discriminant}$</strong></div>
    `;

    // Step 2: Find roots based on Discriminant
    if (discriminant < 0) {
        htmlResult += `
            <div class="step"><strong>Step 3: Analyze Discriminant</strong><br>Since $D < 0$, the roots are complex/imaginary.</div>
            <div class="step"><strong>Final Answer:</strong> No real roots exist.</div>
        `;
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        htmlResult += `
            <div class="step"><strong>Step 3: Apply Quadratic Formula</strong><br>Formula: $x = \frac{-b \pm \sqrt{D}}{2a}$<br>$x = \frac{-(${b}) \pm \sqrt{${discriminant}}}{2(${a})}$</div>
            <div class="step"><strong>Step 4: Solve for both roots</strong><br>Root 1: $x = \frac{${-b} + ${Math.sqrt(discriminant).toFixed(2)}}{${2*a}} = \mathbf{${root1.toFixed(2)}}$<br>Root 2: $x = \frac{${-b} - ${Math.sqrt(discriminant).toFixed(2)}}{${2*a}} = \mathbf{${root2.toFixed(2)}}$</div>
        `;
    }

    stepsContent.innerHTML = htmlResult;
    outputBox.classList.remove('hidden');
}
