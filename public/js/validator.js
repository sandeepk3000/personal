const validator = require("validator");
const value =validator.isEmail("exa@mplemai.com",{
    allow_display_name:true
});
console.log(value);