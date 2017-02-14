 $("#contact-form").submit(function (event) {
     event.preventDefault();
     var name = $('#name').val();

     var posting = $.ajax({
         url: 'https://moneybean.co/contact',
         headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
         },
         type: "POST",
         /* or type:"GET" or type:"PUT" */
         dataType: "json",
         data: {
             name: name,
             coname: $('#coname').val(),
             website: $('#website').val(),
             email: $('#email').val(),
             goals: $('#goals').val()
         },
         success: function (res) {
             console.log(res.status);
            //  $('#contact').fadeOut("slow", function () {

            //  });

            //  if (res.status != 403) {
            //      Materialize.toast(
            //          `
            //         <h6>Thank you, ${name}. An engineer will get back to you ASAP.</h6>        
            //         `, 10000);
            //  } else {
            //      Materialize.toast(
            //          `
            //         <h6>Thank you, ${name}. Our system is down for maintenance or development. Please contact chad@sentigence.com.</h6>        
            //         `, 10000);

            //  }
         },
         error: function () {
             console.log("error");
         }
     });
 });