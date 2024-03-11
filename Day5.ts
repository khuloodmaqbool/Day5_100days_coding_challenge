 //Question 13
 let favCar:string[] = ["Ford","Audi","Honda","Toyota"]      

   favCar.forEach((currentelement)=>{
    console.log(`I would like to own a ${currentelement}`);
    
   })
         //    Question 14 
  
let guest:string[] = ["Avery","Jon","Jack"]

guest.forEach((currentelement)=>{
    console.log(`Hey ${currentelement}! Let's hang out soon. How about dinner this Friday? `);
    
   })

         //    Question 15 
guest.splice(guest.indexOf("Jon"),1,"Greyson")


guest.forEach((currentelement)=>{
    console.log(`Hey ${currentelement}! Let's hang out soon. How about dinner this Friday? `);
    
   })