import axios from "axios";

export default {
  // Gets all appoints
  getAppoints: function() {
    return axios.get("/api/appoints");
  },
  // Gets the appoint with the given id
  getAppoint: function(id) {
    return axios.get("/api/appoints/" + id);
  },
  // Deletes the appoint with the given id
  deleteAppoint: function(id) {
    return axios.delete("/api/appoints/" + id);
  },
  // Saves a appoint to the database
  saveAppoint: function(appointData) {
    return axios.post("/api/appoints", appointData);
  }
};