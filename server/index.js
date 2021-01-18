const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');


// middle ware

app.use(cors());
app.use(express.json());


// Routes

// create a todo for schdueling 

app.post("/daily", async (req, res) => {
    try {
        const { date } = req.body;
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (date, description) VALUES($1, $2) RETURNING *",
            [date, description]
        );
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all todos

app.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM todo");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });


  // get a todo

  app.get("/daily/:id", async(req, res) => {
      try {
          const { id } = req.params;
          const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1" , [
              id
        ]);
        res.json(todo.rows[0]);
      } catch (err) {
          console.error(err.message);
      }
  });

  // update a todo 

  app.put("/daily/:id", async (req, res) => {
      try {
          const { id } = req.params;
          const { description } = req.params;
          const updateTodo = await pool.query(
              "UPDATE todo SET description = $1 WHERE todo_id = $2",
              [description, id],
          );
          res.json("Fixed!")
      } catch (err) {
          console.error(err.message);
      }
  });

  // delete a todo 

  app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id
      ]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
  
  app.listen(5000, () => {
    console.log("server has started on port 5000");
  });