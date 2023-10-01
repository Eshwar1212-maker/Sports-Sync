import { useEffect, useState } from "react";


const usePreviousNotes = (eventTitle: string, events: any, setEventTitle: any) => {


    const [specificEventNotes, setSpecificEventNotes] = useState<any>([]);
    const [preFilledTitle, setPreFilledTitle] = useState();
    const [addPrefilledValue, setAddPrefilledValue] = useState(true);
  
    useEffect(() => {
        
      if (eventTitle?.length > 2) {
        const newEvents = events
          .filter((event: any) => {
            if (event.date.toString().includes("2023") && event.notes.length > 10) {
              return event.title.includes(eventTitle);
            }
          })
          .sort((a: any, b: any) => b.notes.length - a.notes.length); 
         console.log(newEvents[0]?.title);
         
        setSpecificEventNotes(newEvents);
        setPreFilledTitle(newEvents[0]?.title)
        
      }
    }, [eventTitle]);
    return {specificEventNotes, preFilledTitle, addPrefilledValue, setSpecificEventNotes, setPreFilledTitle, setAddPrefilledValue}
}

export default usePreviousNotes;