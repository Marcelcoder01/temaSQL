const mysql = require("mysql2/promise");

const connect = async () => 
{
    try
    {
        const connection = await mysql.createConnection(
        {
            host       : "localhost",
            user       : "root",
            password   : "Lahabana324b6",
            database   : "reto1"
        }); 
        
        console.log("Conexion correcta");

    //--------------------DIA1---------------//
        ////RETO 1

    //    const sql = `INSERT INTO direccion (direccion_id, calle) VALUES ('1', 'Las Palmas 16');`
        
        //   const sql = "DROP TABLE direccion";
        //   console.log("tabla eliminada");

        // const sql = `UPDATE marks SET mark = '0';`
        // const sql = 'SELECT first_name, last_name FROM reto1.students;'



        // const sql = 'SELECT * FROM reto1.marks;'

        // const sql= 'SELECT * FROM reto1.teachers;'

        ////RETO 2

        // const sql= 'DELETE FROM reto1.marks WHERE date < "2013-01-01";'

        //   const sql = `UPDATE marks SET mark = '5' WHERE mark < 5;`

        // const sql = `SELECT subject_id, COUNT(teacher_id) AS numero_profes FROM subject_teachers GROUP BY subject_id`;



//--------------DIA 2----------------------------------//

// RETO 1 

// const sql = 'SELECT AVG(mark) FROM marks WHERE subject_id = 1'

// const sql = 'SELECT COUNT(student_id) FROM students;' 

// const sql= 'DELETE FROM reto1.marks WHERE (date > "2022-01-01" AND date < "2023-01-01") AND mark > 5;'

// const sql = 'SELECT * FROM reto1.students WHERE año_ingreso = 2023;'

//---------------RETO2 (dia2)----------------//

// const sql = 'SELECT student_id, mark FROM marks WHERE(student_id BETWEEN 1 AND 20) OR mark > 8 AND YEAR(fecha) = 2022'

// const sql = 'SELECT AVG(mark), subject_id AS id_asignatura FROM marks WHERE fecha > "2022-01-01" AND fecha < "2022-12-31" GROUP BY subject_id'

// const sql = 'SELECT AVG(mark), student_id AS id_estudiante FROM marks WHERE fecha > "2022-01-01" AND fecha < "2022-12-31" GROUP BY student_id'


///----------------------DIA 3 -------------------------\\

//--------------RETO 1------------------>

// const sql = 'SELECT first_name, last_name, title FROM students INNER JOIN grupos ON students.group_id = grupos.grupo_id INNER JOIN subject_teachers ON grupos.grupo_id = subject_teachers.group_id INNER JOIN subjects ON subject_teachers.subject_id = subjects.subject_id;'


//-----------------RETO 2 ------------------->

// const sql = 'SELECT first_name, last_name, title FROM teachers INNER JOIN subject_teachers ON teachers.teacher_id = subject_teachers.teacher_id INNER JOIN subjects ON subject_teachers.subject_id = subjects.subject_id;'


//-----------------RETO 3 ------------------->

const sql = 'SELECT subjects.title, teachers.first_name, teachers.last_name, COUNT (*) as alumnos FROM subjects INNER JOIN subject_teachers ON subjects.subject_id = subject_teachers.subject_id INNER JOIN teachers ON teachers.teacher_id = subject_teachers.teacher_id INNER JOIN grupos ON subject_teachers.group_id = grupos.grupo_id INNER JOIN students ON grupos.grupo_id = students.group_id GROUP BY subjects.title, teachers.first_name, teachers.last_name;'





    const [result, data]  = await connection.execute(sql);
    console.log(result);
    }
    catch(err)  
    {
        console.log(err)
        await connection.end();
    }
}

connect();






