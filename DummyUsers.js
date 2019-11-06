var x=new Date();
var d=x.getDate();
var m=x.getMonth()+1;
var y=x.getFullYear();
var d1=11,m1=11,y1=2019;

//to find the number of days between the date of upload and the date on which user opened the blog
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
  
    var n2 = y1*365 + d1; 
    for (var i=0; i<m1 - 1; i++) 
        n2 =n2+ monthDays[i]; 
    n2 =n2+ countLeapYears(d1,m1,y1); 
  
    
    ans=(n2 - n1-1); 

    //to find the number of minutes on te day of upload
    var hu=3,mu=23,su=45;
    var calminb=hu*60+mu;
    console.log(calminb);

    //to find the number of minutes on that particular day
    var h=x.getHours();
    var m=x.getMinutes();
    var s=x.getSeconds();
    var calmina=h*60+m;
    console.log(calmina);

    var sum=0;
    for(var i=2;i<ans;i++)
    {
    var y=Math.floor(Math.random() * 100)+1;
    sum=sum+i*x*y;
    }
