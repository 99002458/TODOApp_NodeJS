const Task = require("../models/Task");

const month = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

module.exports.home = async function (req, res) {
  // all months


  // all tasks
  Task.find(function (err, tasks) {
    if (err) {
      console.log("unable to fetch data");
      return res.redirect("/");
    }

    // render homepage with task
    return res.render("index", { tasks, month });
  });
};

// export add task method
module.exports.addTask = function (req, res) {
  console.log("Task Added - ", req.body);

  // create a single Task
  Task.create(req.body, function (err, tasks) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }

    return res.redirect("/");
  });
};

// export delete task method
module.exports.deleteTask = function (req, res) {
  console.log("Task Deleted - ", req.body);

  // delete single or list of Task
  Task.deleteMany({ _id: { $in: req.body.id } }, function (err, tasks) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    } else {
      return res.redirect("/");
    }
  });
};

// export Edit task method

module.exports.editTask = function (req, res) {
  console.log(req.body.id + "Shrikant edit");
  let id = req.body.id;
  Task.find(function (err, tasks) {
    if (err) {
      console.log("unable to fetch data");
      return res.redirect("/");
    }
console.log("shrikant");
    // render homepage with task
    return res.render("edittodo", { tasks, month, id });
  });
};

module.exports.confirmEditedTask = function(req,res){
  console.log(req.body.id + "Shrikant confirm");
  const id = req.body.id;
  Task.findByIdAndUpdate(id,{description:req.body.description,category:req.body.category,dueDate:req.body.dueDate},{new:true},function(err,task){
    if (err){
      console.log(err)
  }
  else{
      console.log("Updated User : ", task);
  }
  });
  return res.redirect('/');
};
