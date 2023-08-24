import Modal from '@/app/components/Modal'
import { Workout } from '@prisma/client';
import { AreaChart, Title } from '@tremor/react';
import { FC, useEffect, useState } from 'react'
import { format } from 'date-fns';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

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
      console.log("WORKOUT TITLE: " + workout.title, "  EXERCISE NAME: ", exerciseName);
      return workout.title === exerciseName;
    });
    console.log(filtered);
    setFilteredWorkouts(filtered);
  }, [exerciseName]);

  const exercisesData = [
    {
      year: "Jan",
      weight: 4,
    },
    {
      year: "Feb",
      weight: 7,
    },
    {
      year: "Mar",
      weight: 11,
    },
    {
      year: "Apr",
      weight: 7,
    }
  ];

  const exercise = filteredWorkouts.map((workout: any) => {
    const formattedDate = format(new Date(workout.date), 'MM/dd');
    return { year: formattedDate, weight: workout.weight };
  });
  console.log(exercise);

  const {theme} = useTheme()

  return (
    <Modal isFullWidth={true} isOpen={isOpen} onClose={onClose}>
      <div className=''>
      <Title className="">Progression on {exerciseName}</Title>
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
    </Modal>
  );
}

export default ProgressionModal;
