addEventListener('DOMContentLoaded', () => {

   const entryScreen = document.getElementById('entry_screen')
   const abs = document.getElementById('abs')
   const steps = [...document.getElementsByClassName('step')]
  
   const boseIO = new IntersectionObserver((entries) => {
         entries.forEach(step => {
            //  read index from element’s property
            let index = step.target.elems_index;
   
            if (step.isIntersecting) {
               abs.removeAttribute('class');
               switch (index) {
                  case 0:
                     abs.classList.add('step0');
                     break;
                  case 1:
                     abs.classList.add('step1');
                     break;
                  case 2:
                     abs.classList.add('step2');
                     break;
                  case 3:
                     abs.classList.add('step3');
                     break;
                  case 4:
                     abs.classList.add('step4');
                     break;
                  case 5:
                     abs.classList.add('step5');
                     break;
                  case 6:
                     abs.classList.add('step6');
                     break;
                  case 7:
                     abs.classList.add('step7');
                     break;
                  case 8:
                     abs.classList.add('step8');
                     break;
                  case 9:
                     abs.classList.add('step9');
                     break;
                  case 10:
                     abs.classList.add('step10');
                     break;
                  case 1:
                     abs.classList.add('step11');
                     break;
                  case 2:
                     abs.classList.add('step12');
                     break;
                  default:
               }
            }
         });
      }, {
      rootMargin: '0px 0px',
      threshold: 0.6
   });
   
   if (steps) {
      steps.forEach((step, i) => {
         // save index as element’s property, before register the element in observer
         step.elems_index = i
         boseIO.observe(step)
      }
   )}
   
   
   function message1() {
      const m1divs = document.querySelectorAll('#message1>p');
      if (window.matchMedia("(min-width: 1080px)").matches) {
         m1divs[0].innerHTML = 'Imagine sitting in your';
         m1divs[1].innerHTML = '<b>CAR</b> and listening to';
         m1divs[2].innerHTML = 'your favourite song';
         m1divs[3].innerHTML = '';
      } else {
         m1divs[0].innerHTML = 'Imagine sitting in';
         m1divs[1].innerHTML = 'your <b>CAR</b> and';
         m1divs[2].innerHTML = 'listening to your';
         m1divs[3].innerHTML = 'favourite song';
      }
   }
   message1();

   function message2() {
      const m2divs = document.querySelectorAll('#message2>p');
      if(window.innerHeight > window.innerWidth){
         m2divs[0].innerHTML = 'NO,';
         m2divs[1].innerHTML = 'SCRATCH';
         m2divs[2].innerHTML = 'THAT.';
      } else {
         m2divs[0].innerHTML = 'NO, SCRATCH THAT.';
         m2divs[1].innerHTML = '';
         m2divs[2].innerHTML = '';
      }
   }
   message2();
   
   // DISABLE TRANSITION DURATION ON RESIZE
   const circ0a = document.getElementById('circ0a');
   const circ0b = document.getElementById('circ0b');
   const transitionResetElmnts = [circ0a, circ0b];
   
   addEventListener('resize', ()=>{
      message1();
      message2();
      for (const el of transitionResetElmnts) el.style.setProperty("--dur", "0s")
   })
   
   addEventListener('scroll', ()=>{
      setTimeout(()=>{
         for (const el of transitionResetElmnts) el.style.removeProperty("--dur", "0s")
      }, 200)
   })
   
});
