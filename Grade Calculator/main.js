
// 1.Find total.
// 2.Find Percentage.
// 3.Find Grade.
// 4.To check pass or fail ?
// 5.Combined and show output on screen.

let btn = document.getElementById("btn");
btn.addEventListener('click',function()
{
    // document.write("clicked")
    
    // let newPara = document.createElement("p");
    // target.appendChild(newPara);

    let maths = parseInt(document.getElementById("math").value);
    let eng = parseInt(document.getElementById("eng").value);
    let phy = parseInt(document.getElementById("phy").value)
    let web = parseInt(document.getElementById("wp").value);
    let cs = parseInt(document.getElementById("cs").value);
    //calulate total marks
    let total = maths+eng+phy+web+cs;

    //calculate percentage
    let percentage = (total/500)*100;

    //TO FIND GRADE
    let grade;
    if(percentage <=100 && percentage>=80){
        grade= 'A';
    }else if(percentage <= 79 && percentage >= 60){
        grade = 'B';
    }else if (percentage <= 59 && percentage >= 36){
        grade = 'C';
    }else {
        grade = 'F';
    }

        // console.log(grade);
    if(grade == 'F'){
            document.getElementById("result").innerHTML = `SORRY YOU ARE FAIL<BR><BR>OUT OF 500 YOUR TOTAL IS ${total},YOU HAVE GOT ${percentage}% AND YOUR GRADE IS ${grade}.`;
    }
    else{
        document.getElementById("result").innerHTML = `CONGRATULATIONS !!!<BR><BR>OUT OF 500 YOUR TOTAL IS ${total},YOU HAVE GOT ${percentage}% AND YOUR GRADE IS ${grade}.`;

    }
    // document.write(newPara)
    // console.log(newPara)
    
})