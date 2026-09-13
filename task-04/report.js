import {
    calculateAverageSalary,
    getExperiencedEmployees,
    groupByDepartment
} from "./employees.js";

export const formatEmployee = ({id, name, department, salary, experience}) =>
    `  • [ID: ${id}] ${name.padEnd(16)} | Dep: ${department.padEnd(10)} | Salariu: ${salary.toString().padStart(5)} MDL | Experienta: ${experience} ani`;

export const generateFinalReport = (initialList, updatedList) => {
    const avgInitial = calculateAverageSalary(initialList);
    const avgUpdated = calculateAverageSalary(updatedList);
    const diffAvg = avgUpdated - avgInitial;

    const experienced = getExperiencedEmployees(initialList, 3);
    const groupedDepartments = groupByDepartment(updatedList);

    const initialTotalPayroll = initialList.reduce((sum, {salary}) => sum + salary, 0);
    const updatedTotalPayroll = updatedList.reduce((sum, {salary}) => sum + salary, 0);
    let report = `
================================================================================
                    RAPORT FINAL - GESTIUNE ANGAJAȚI
================================================================================

1. REZUMAT GENERAL
--------------------------------------------------------------------------------
• Numar total de angajati: ${initialList.length}
• Fond salarial initial:   ${initialTotalPayroll.toLocaleString()} MDL
• Fond salarial actualizat: ${updatedTotalPayroll.toLocaleString()} MDL (+${(updatedTotalPayroll - initialTotalPayroll).toLocaleString()} MDL)
• Salariu mediu initial:   ${avgInitial.toFixed(2)} MDL
• Salariu mediu actualizat: ${avgUpdated.toFixed(2)} MDL (+${diffAvg.toFixed(2)} MDL)

2. ANGAJATI CU EXPERIENTA > 3 ANI (ELIGIBILI PENTRU MAJORARE +10%)
--------------------------------------------------------------------------------
Total eligibili: ${experienced.length} angajati
${experienced.map((emp) => formatEmployee(emp)).join("\n")}

3. LISTA TUTUROR ANGAJATILOR DUPA MAJORARE (+10% PENTRU EXPERIENȚA > 3 ANI)
--------------------------------------------------------------------------------
${updatedList.map((emp) => formatEmployee(emp)).join("\n")}

4. REPARTIZARE SI MEDIE SALARIALa PE DEPARTAMENTE (DUPA MAJORARE)
--------------------------------------------------------------------------------`;

    for (const [department, emps] of Object.entries(groupedDepartments)) {
        const depAverage = calculateAverageSalary(emps);
        report += `
\n[Departament: ${department}] - Total angajati: ${emps.length} | Salariu mediu: ${depAverage.toFixed(2)} MDL
${emps.map(({
                                                                                                                                            name,
                                                                                                                                            salary,
                                                                                                                                            experience
                                                                                                                                        }) => `   - ${name.padEnd(16)}: ${salary} MDL (${experience} ani exp.)`).join("\n")}`;
    }

    report += `\n
================================================================================
               SFARSIT RAPORT - GENERAT CU SUCCES
================================================================================`;

    return report;
};
