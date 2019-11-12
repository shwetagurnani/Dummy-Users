const db=require('./util/database');

var x=new Date();
var curDay=x.getDate();//current date
var curMonth=x.getMonth()+1;//current month
var curYear=x.getFullYear();//current year
var curHr=x.getHours();
var curMm=x.getMinutes();


var sum=0;
var d,m,y,h,m,valueY,valueX,ny;
db.query('SELECT * from data where id=1',(error,results)=>
{
if(error)
console.log(error);
else
{
      d=results[0].day;//day the dummy views last updated
      m=results[0].month;//month the dummy views last updated
      y=results[0].year;//year the dummy views last updated
      h=results[0].hour;//hour
      mn=results[0].minute;//minute
      valueY=results[0].y;//value of y
      valueX=results[0].x;
     
     
 if(d!=curDay && curDay>d)
{
const monthDays = [31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31];

function countLeapYears(d,m,y)
{
  if(m<=2)
  y=y-1;
  return (Math.floor(y/4)-Math.floor(y/100)+Math.floor(y/400));
}
var n1 = y*365 + d; 
  
    for (var i=0; i<m - 1; i++) 
        n1 =n1+ monthDays[i]; 
  
     n1 =n1+ countLeapYears(d,m,y); 
  
    var n2 = curYear*365 + curDay; 
    for (var i=0; i<curMonth - 1; i++) 
        n2 =n2+ monthDays[i]; 
    n2 =n2+ countLeapYears(curDay,curMonth,curYear); 
    ans=(n2 - n1-1); 
    if(ans<0)
    ans=0;
   
    //to find the number of minutes on te day of upload
    var MinBefore=1440-h*60-mn;
    sum=sum+((MinBefore*valueX*valueY)/(24*60));
    sum=Math.ceil(sum);

    //to find the number of minutes on that particular day
    // console.log("sum is"+sum);
    var MinAfter=curHr*60+curMm;
    ny=(Math.random())+1;
    var newy = ny.toFixed(2);      
    console.log(newy);
    console.log(MinAfter);
    console.log(valueX);
   
    sum=sum+((MinAfter*valueX*newy)/(24*60));
    sum=Math.ceil(sum);
    // console.log("sum is"+sum);
    for(var i=1;i<=ans;i++)
    {
    var ny= (Math.random())+1;
    var y=ny.toFixed(2);
    sum=sum+(i*valueX*y);
    sum=Math.ceil(sum);
    console.log("x is"+valueX);
    console.log("y is"+y);
    console.log("sum is"+sum);
    }
   
}
else
{ 
    var diff=curHr*60+curMm-h*60-m;
    sum=sum+diff*x*y;
}
      
}



});



//db.query('UPDATE data SET y=newy,day=curDay,month=curMonth,year=curYear,hour=curHr,minute=curMm where id=1');
