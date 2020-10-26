import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?results=5000";
// const APIKEY = "&apikey=trilogy";

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};