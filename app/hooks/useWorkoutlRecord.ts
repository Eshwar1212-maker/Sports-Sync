import { Workout } from "@prisma/client";
import { useEffect, useState } from "react";


function usePersonalRecord(title: string, weight: number, workoutRecord: Workout[]) {
  const [personalRecord, setPersonalRecord] = useState<boolean>(false);

  useEffect(() => {
    const titleRecord = workoutRecord.filter(
      (workout: Workout) => workout.title === title
    );
    const isPersonalRecord = titleRecord.every((workout: Workout) => {
      return weight > workout?.weight!;
    });
    setPersonalRecord(isPersonalRecord);
  }, [title, weight, workoutRecord]);

  return personalRecord;
}


export default usePersonalRecord