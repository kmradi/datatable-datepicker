$(document).ready( function () {
    $('#table1').DataTable();
    $(function() { 
        $( "#datepicker1" ).datepicker({
            changeYear:true,
            changeMonth:true,
            // dateFormat:'dd-mm-yy',
            defaultDate:'18-09-20',
            minDate:'0'
        }); 
        $("#datepicker2").datepicker({
            changeYear:true,
            changeMonth:true,
            // dateFormat:'dd-mm-yy',
            defaultDate:'18-09-20',
            minDate:'0'
        });
        $("#datepicker1").change(function() { 
            startDate = $(this).datepicker('getDate'); 
            $("#datepicker2").val("");
            $("#datepicker2").datepicker("option", "minDate", startDate); 
          
        });
        $('#btn1').click(function(){
            start = $('#datepicker1').datepicker('getDate');
            end = $("#datepicker2").datepicker('getDate'); 
            start = new Date(start);
            end = new Date(end);
            day = (end.getTime()-start.getTime())/(1000*3600*24);
            if(day>7){
                $('#success').text(null);
                $('#fail').text('Leave greater than 7 days, Not accepted.');
            }
            else{
                $('#fail').text(null);
                $('#success').text('Leave under 7 days, request sent for processing');
            }
        });
    }); 
    
});

// $(document).ready(function() { 
          
//     $(function() { 
//         $( "#datepicker1" ).datepicker(); 
//     }); 
// }) 