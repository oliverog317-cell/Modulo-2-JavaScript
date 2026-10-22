const alumno = {
    nombre: "Camila",
    edad: 24,
    curso: "JavaScript",
    notas: [8, 9, 10],
};

const {nombre, curso, notas} = alumno;

console.log(nombre);
console.log(curso);
console.log(notas);

const AlumnoActualizado = {
    ...alumno,
    edad: 25,
    activo: true,
};  

console.log(AlumnoActualizado);

const TextoJSON = JSON.stringify(AlumnoActualizado, null, 2);

console.log(TextoJSON);

const AlumnoRecuperado = JSON.parse(TextoJSON);

console.log(AlumnoRecuperado);


console.log(AlumnoRecuperado.nombre);
console.log(AlumnoRecuperado.curso);
console.log(AlumnoRecuperado);

console.log(alumno.edad);