// Function to switch between different formula screens smoothly
function switchFormula(event, formulaId) {
    // Hide all formula input sections
    document.querySelectorAll('.formula-section').forEach(div => div.classList.add('hidden'));
    
    // Show the selected formula input section
    document.getElementById(formulaId).classList.remove('hidden');
    
    // Remove active styling from all buttons
    document.querySelectorAll('.formula-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active styling to the clicked button safely
    event.currentTarget.classList.add('active');

    // Hide the output box until user calculates fresh inputs
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

    // Generate step-by-step breakdown using clean unicode symbols
    stepsContent.innerHTML = `
        <div class="step"><strong>Step 1: Identify Given Variables</strong><br>Current (I) = ${i} A<br>Resistance (R) = ${r} Ω</div>
        <div class="step"><strong>Step 2: State the Formula</strong><br>V = I × R</div>
        <div class="step"><strong>Step 3: Substitute the Values</strong><br>V = ${i} × ${r}</div>
        <div class="step"><strong>Step 4: Calculate Final Result</strong><br><strong>Voltage (V) = ${v.toFixed(4).replace(/\.?0+$/, "")} Volts</strong></div>
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
        alert("Please enter valid numbers for a, b, and c.");
        return;
    }
    if (a === 0) {
        alert("The value of 'a' cannot be zero in a quadratic equation.");
        return;
    }

    // Calculate Discriminant (b^2 - 4ac)
    const discriminant = (b * b) - (4 * a * c);
    
    let htmlResult = `
        <div class="step"><strong>Step 1: Identify Coefficients</strong><br>a = ${a}, b = ${b}, c = ${c}</div>
        <div class="step"><strong>Step 2: Calculate the Discriminant (D)</strong><br>Formula: D = b² - 4ac<br>D = (${b})² - 4(${a})(${c})<br>D = ${b*b} - ${4*a*c}<br><strong>D = ${discriminant}</strong></div>
    `;

    // Calculate roots based on Discriminant value
    if (discriminant < 0) {
        htmlResult += `
            <div class="step"><strong>Step 3: Analyze Discriminant</strong><br>Since D is less than 0, the roots are complex (imaginary).</div>
            <div class="step"><strong>Final Answer:</strong> No real roots exist.</div>
        `;
    } else {
        const sqrtD = Math.sqrt(discriminant);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);

        htmlResult += `
            <div class="step"><strong>Step 3: Apply the Quadratic Formula</strong><br>Formula: x = (-b ± √D) / (2a)<br>x = (-(${b}) ± √${discriminant}) / (2 × ${a})</div>
            <div class="step"><strong>Step 4: Separate and Solve Both Roots</strong><br>
                Root 1 (using +): x = (${-b} + ${sqrtD.toFixed(4).replace(/\.?0+$/, "")}) / ${2*a} = <strong>${root1.toFixed(4).replace(/\.?0+$/, "")}</strong><br>
                Root 2 (using -): x = (${-b} - ${sqrtD.toFixed(4).replace(/\.?0+$/, "")}) / ${2*a} = <strong>${root2.toFixed(4).replace(/\.?0+$/, "")}</strong>
            </div>
        `;
    }

    stepsContent.innerHTML = htmlResult;
    outputBox.classList.remove('hidden');
}
