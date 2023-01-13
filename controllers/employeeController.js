const {Employee} = require('../models');
const jobtitles = ['CEO', 'VP'];
const states = ['CA', 'AZ'];

module.exports.displayEmployees = async function(req, res){
    const employees = await Employee.findAll();
    res.render('index', {employees})
};

module.exports.renderAddEmployeeForm = function(req, res){
    res.render('createUserForm',
        {
            employee: {
              first_name:'',
              last_name:'',
              job_title:'',
              street_line_1:'',
              street_line_2:'',
              city:'',
              state:states[0],
              zip:'',
              phone_number:'',
              year_hired:''
            },
            jobtitles,
            stateslist:states
        });
};

module.exports.addEmployee = async function(req, res){
    await Employee.create(
        {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            job_title:req.body.job_title,
            street_line_1:req.body.street_line_1,
            street_line_2:req.body.street_line_2,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            phone_number:req.body.phone_number,
            year_hired:req.body.year_hired
        }
    );
    res.redirect('/');
};

module.exports.renderUpdateForm = async function(req, res){
    const employee = await Employee.findByPk( req.params.id);
    res.render('edit', {
        employee,
        jobtitles,
        stateslist:states
    });
};

module.exports.updateEmployee = async function(req, res){
    await Employee.update(
        {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            job_title:req.body.job_title,
            street_line_1:req.body.street_line_1,
            street_line_2:req.body.street_line_2,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            phone_number:req.body.phone_number,
            year_hired:req.body.year_hired
        },
        {
            where: {
                id: req.params.id
            }
        });
    res.redirect('/');
};

module.exports.deleteEmployee = async function(req, res){
    await Employee.destroy({
        where:{
            id: req.params.id
        }
    });
    res.redirect('/');
};