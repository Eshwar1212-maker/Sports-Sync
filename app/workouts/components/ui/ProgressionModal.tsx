import { Workout } from '@prisma/client';
import { AreaChart, Title } from '@tremor/react';
import { FC, useEffect, useMemo, useState } from 'react'
import { format } from 'date-fns';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';
import ProgressionModall from './Modal';

const dataFormatter = (number: number) => {
    return `${Intl.NumberFormat("us").format(number).toString()}`;
};

interface ProgressionModalProps {
  isOpen?: boolean;
  onClose: () => void;
  exerciseName: string;
  workouts: any;
}

const ProgressionModal: FC<ProgressionModalProps> = ({ isOpen, onClose, exerciseName, workouts }) => {

  const [filteredWorkouts, setFilteredWorkouts] = useState([]);

  useEffect(() => {
    const filtered = workouts.filter((workout: Workout) => {
      if(workout.date.toString().includes("202")){
        return workout.title === exerciseName;
      }
    });
    setFilteredWorkouts(filtered);
  }, [exerciseName]);


  const exercise = useMemo(() => 
  filteredWorkouts.map((workout: any) => {
    if(workout.date.toString().includes("20")){
      const formattedDate = format(new Date(workout.date), 'MM/dd');
      return { year: formattedDate, weight: workout.weight };
    }
  }),
  [filteredWorkouts]
);



  return (
    <ProgressionModall isFullWidth={true} isOpen={isOpen} onClose={onClose}>
      <div className=''>
      <div className='flex justify-between'>
      <Title className="text-sm">Progression on {exerciseName}</Title>
      <button onClick={() => onClose()} className='sm:hidden'><IoClose className="h-6 w-6" aria-hidden="true" />
      </button>
      </div>
      <AreaChart
        className={clsx("mt-46 py-8 h-[430px]")}
        data={exercise}
        index="year"
        categories={["weight"]}
        colors={["red", "red"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
      </div>
      {
        exercise.length < 1 &&
         <p className='text-sm mx-auto text-center'>
          <span className='underline cursor-pointer' onClick={() => location.reload()}>Refresh</span> the page if no data shows
        </p>
      }
    </ProgressionModall>
  );
}

export default ProgressionModal;
