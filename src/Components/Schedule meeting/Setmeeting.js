import React from 'react';
import {ScheduleComponent,Inject,Day,Week,Month,Agenda }from '@syncfusion/ej2-react-schedule';


function Setmeetings(){
return(
     <>
     <ScheduleComponent currentView={Month}>
         <Inject services={[Day,Week,Month,Agenda]}/>
     </ScheduleComponent>
     </>
)
};
export default Setmeetings;