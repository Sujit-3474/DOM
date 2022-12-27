
    function ChangeDirection()
    {
      const myElement=document.getElementsByClassName('parent')
      myElement[0].style.flexDirection="column";
      myElement[0].style.height="900px";
      myElement[0].style.color="red";
    }


    function ReplaceText()
    {
        const elementChange=document.getElementsByTagName('h2')
        elementChange[0].innerText="Welcome to Elevation academy"
    }

    function Change()
    {
        const element1=document.getElementsByTagName('h1')
       element1[0].innerText="Hello World"
    }

    function clock()

    {
        
    const date=new Date();
    console.log(date);
    let hours=date.getHours();
    console.log(hours);
    let mins=date.getMinutes();
    console.log(mins);
    let secs=date.getSeconds();
    console.log(secs);
    
    const hoursSlot=document.getElementsByClassName('hours');
    hoursSlot[0].innerHTML = `${hours} :`;
    
    const minsSlot=document.getElementsByClassName('mins');
    minsSlot[0].innerHTML = `${mins} :`;
    
    const secsSlot=document.getElementsByClassName('secs');
    secsSlot[0].innerHTML = `${secs}`;
    
    
    }
    
    setInterval(()=>
    {
        clock();
    }, 1000);



    const element12=document.getElementsByTagName('h3');
        element12[0].style.color="red";