require(""./db");
const CourseModel = require("./course");
const express = require('express');



const app = express();
app.use(express.json()); //parse json

app.get('/', function (req, res) {
  res.send("Hello!");
});

//ALL Courses
app.get("/api/courses",async (req,res)=>{
    const courses = await CourseModel.find();
    res.json({
        success:true,
        data:courses,
    });
});

//Single Course
app.get("/api/courses/:id",async (req,res)=>{
    //console.log(req.params.id);
    const course = await CourseModel.findOne({_id : req.params.id});
    res.json({
        success:true,
        data:course,
    });
});

//Save Courses
app.post("/api/courses", async (req,res)=>{
    console.log(req.body);

    const course = new CourseModel({
        name: req.body.name,
        author: req.body.author
    });

    const result = await course.save();
    console.log(result);
    res.json({
        success:true,
        data: result,
    });
});

//Update Single Course
app.put("/api/courses/:id",async (req,res)=>{
    //console.log(req.params.id);
    const course = await CourseModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:{
                name: req.body.name,
                author: req.body.author,
            },
        },
        {new:true}
    );

    res.json({
        sucess:true,
        data:course,
    });
});

//Delete Single Course
app.delete("/api/courses/:id",async (req,res)=>{
   // console.log(req.params.id);
   const course = await CourseModel.findByIdAndRemove(req.params.id);
   if(course){
       res.json({
           success:true,
           message: "Record deleted",
       });
   }
   else{
    res.json({
        success:true,
        message: "No course Found",
    });
   }
});


let port = 3000;

app.listen(port,function(){
    console.log(`App is listening on port ${port}`);
});