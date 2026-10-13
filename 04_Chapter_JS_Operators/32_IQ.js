let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);


// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

// o/p: Response: 850ms — Within SLA ✅
// What is the SLA time ? - 1000
