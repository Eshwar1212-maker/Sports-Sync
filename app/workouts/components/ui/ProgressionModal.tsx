import { Workout } from '@prisma/client';
import { AreaChart, Title } from '@tremor/react';
import { FC, useEffect, useState } from 'react'
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


  const exercise = filteredWorkouts.map((workout: any) => {
    const formattedDate = format(new Date(workout.date), 'MM/dd');
    return { year: formattedDate, weight: workout.weight };
  });


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
        colors={["sky", "red"]}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
      </div>
      {
        exercise.length <= 1 && <p className='text-sm mx-auto text-center'>Add one more entry of this exercise for a progression</p>
      }
    </ProgressionModall>
  );
}

export default ProgressionModal;
