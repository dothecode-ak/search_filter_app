"use strict";function updateEmployees(){var e=$("select.level").val(),t=$("select.gender").val(),a=$("select.employees").val(),l=$("#myInput").val().toLowerCase();console.log(l),$(".all-example-list").find(".card").hide().filter(function(n){console.log("yyyyyyyyyyyyyyy"+n);var s=!0,d=!0,i=!0,r=!0;return console.log(r),"all"!==e&&(s=$(this).attr("data-level")===e),"all"!==t&&(d=$(this).attr("data-gender")===t),"all"!==a&&(i=$(this).attr("data-employee")===a),""!==l&&(r=$(this).text().toLowerCase().indexOf(l)>-1,console.log("YYYYYYYYYYYYY")),s&&d&&i&&r}).fadeIn("fast")}for(var all_json_data_list=[{name:"Venkatesh Kumar",gender:"male",department:"tech_team",profile:"Teachnical Lead",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"},{name:"Anil Yadav",gender:"male",department:"tech_team",profile:"Software Engineer",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{name:"Saif",gender:"male",department:"tech_team",profile:"Team Lead",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"},{name:"Sanket Shinde",gender:"male",department:"tech_team",profile:"Senior Software Engineer",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"},{name:"Anish joy",gender:"male",department:"graphics",profile:"Graphics Designer",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}],emp_count=all_json_data_list.length,l=0;l<emp_count;l++)$(".all-example-list").append(' <div class="card" style="width: 18rem;"><div class= "card-body"><h5 class="card-title empname"></h5><b></b><p class="card-text empdesc"></p></div></div >');$(".all-example-list>.card>.card-body>.empname").each(function(e,t){$(t).text(all_json_data_list[e].name)}),$(".all-example-list>.card>.card-body>b").each(function(e,t){$(t).text(all_json_data_list[e].profile)}),$(".all-example-list>.card").each(function(e,t){$(t).attr("data-level",all_json_data_list[e].department),$(t).attr("data-employee",all_json_data_list[e].name),$(t).attr("data-gender",all_json_data_list[e].gender)}),$(".all-example-list>.card>.card-body>.empdesc").each(function(e,t){$(t).text(all_json_data_list[e].desc)}),$(".employees");var url="./assets/json/cities.json";$.getJSON(url,function(e){$.each(e,function(e,t){$("#cityList").append('<option value="'+t.name+'">'+t.name+"</option>")})}),console.log(all_json_data_list),$("select.level, select.gender, select.employees").change(updateEmployees),$("#myInput").on("keyup",updateEmployees);