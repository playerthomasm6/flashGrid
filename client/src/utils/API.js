import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all books
  getProjects: function() {
    return axios.get("/api/projects");
  },
  // Gets the book with the given id
  getProject: function(id) {
    return axios.get("/api/projects/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(id) {
    return axios.delete("/api/projects/" + id);
  },
  deleteProject: function(id) {
    return axios.delete("/api/projects");
  },
  // Saves a book to the database
  saveTask: function(task) {
    return axios.post("/api/projects", task);
  },

  editTask: function(id) {
    return axios.put("/api/projects", id);
  }
};

